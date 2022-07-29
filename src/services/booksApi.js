import { Book } from "../store/books";

const BASE_URL = "http://openlibrary.org";

export const searchBookByTitle = (title) =>
  fetch(`${BASE_URL}/search.json?title=${title}&limit=3`)
    .then((res) => res.json())
    .then((res) => {
      return res.docs.map((doc) => {
        return new Book({
          title: doc.title,
          id: doc.key,
          author: doc.author_name.join(", "),
        });
      });
    });

export const searchAuthorByName = (name) =>
  fetch(`${BASE_URL}/search/authors.json?q=${name}&limit=3`)
    .then((res) => res.json())
    .then((res) => res.docs.map((doc) => doc.name));
