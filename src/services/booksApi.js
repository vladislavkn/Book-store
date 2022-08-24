import { Book } from "../store/books";
import { child, get, getDatabase, ref, set } from "firebase/database";
import getLastSplitted from "../utils/getLastSplitted";

const BASE_URL = "http://openlibrary.org";

export const searchBookByTitle = (title) =>
  fetch(`${BASE_URL}/search.json?title=${title}&limit=3`)
    .then((res) => res.json())
    .then((res) => {
      return res.docs.map((doc) => {
        return new Book({
          title: doc.title,
          id: getLastSplitted(doc.key, "/"),
          author: doc.author_name.join(", "),
        });
      });
    });

const fetchAuthorById = async (id) =>
  fetch(`${BASE_URL}/authors/${id}.json`)
    .then((res) => res.json())
    .then((res) => res.name);

export const fetchBookDataById = async (id) => {
  try {
    const { title, authors } = await fetch(`${BASE_URL}/works/${id}.json`).then(
      (res) => res.json()
    );
    const authorIds = authors.map((doc) =>
      getLastSplitted(doc.author.key, "/")
    );
    const authorNames = await Promise.all(authorIds.map(fetchAuthorById));

    return new Book({ title, id, author: authorNames.join(", ") });
  } catch (e) {
    console.error(e);
    return null;
  }
};

const dbRef = ref(getDatabase());

export const fetchBookById = async ({ id, userId }) => {
  const bookData = await fetchBookDataById(id);
  if (!bookData) return null;

  const bookRef = child(dbRef, `/${userId}/books/${id}`);

  try {
    const snapshot = await get(bookRef);
    if (snapshot.exists()) {
      const { dateRead } = snapshot.val();
      bookData.dateRead = dateRead;
    }
  } catch (e) {
    console.error(e);
  }
  return bookData;
};

export const fetchUserBooks = async (userId) => {
  const booksRef = child(dbRef, `/${userId}/books`);
  let booksData;
  try {
    const snapshot = await get(booksRef);
    if (!snapshot.exists()) return [];
    booksData = snapshot.val();
  } catch (e) {
    console.error(e);
    return [];
  }

  try {
    const books = await Promise.all(
      Object.keys(booksData).map(fetchBookDataById)
    );
    Object.values(booksData).forEach(({ dateRead }, i) => {
      books[i].dateRead = dateRead;
    });

    return books;
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const setBook = async ({ id, userId, dateRead }) => {
  const bookRef = child(dbRef, `/${userId}/books/${id}`);

  try {
    await set(bookRef, {
      dateRead,
    });
    return { ok: true };
  } catch (e) {
    console.error(e);
    return { ok: false, error: e };
  }
};

export const removeBook = async ({ id, userId }) => {
  const bookRef = child(dbRef, `/${userId}/books/${id}`);

  try {
    await set(bookRef, null);
    return { ok: true };
  } catch (e) {
    console.error(e);
    return { ok: false, error: e };
  }
};
