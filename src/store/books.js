import {
  fetchBookById,
  fetchUserBooks,
  removeBook,
  setBook,
} from "../services/booksApi";

export class Book {
  constructor({ title, author, id, dateRead = "" }) {
    this.title = title;
    this.author = author;
    this.id = id;
    this.dateRead = dateRead;
  }
}

export default {
  state: () => ({
    books: [],
    showRead: true,
    loaded: true,
  }),
  mutations: {
    setBook(state, book) {
      const bookIndex = state.books.findIndex((b) => b.id === book.id);
      if (!~bookIndex) {
        state.books.push(book);
      } else {
        state.books[bookIndex] = book;
      }
    },
    setLoaded(state, loaded) {
      state.loaded = loaded;
    },
    removeBook(state, { id }) {
      state.books = state.books.filter((b) => b.id !== id);
    },
    setShowRead(state, showReadValue) {
      state.showRead = showReadValue;
    },
    setBookDateRead(state, { id, dateRead }) {
      state.books = state.books.map((b) =>
        b.id === id ? new Book({ ...b, dateRead }) : b
      );
    },
    setBooks(state, books) {
      state.books = books;
    },
  },
  actions: {
    async addBook({ commit, rootState }, { title, author, isRead, id }) {
      const dateRead = isRead ? new Date().toString() : "";
      const book = new Book({ title, author, dateRead, id });

      commit("setLoaded", false);
      const userId = rootState.auth.user.uid;
      const result = await setBook({ id, dateRead: book.dateRead, userId });
      commit("setLoaded", true);

      if (result.ok) {
        commit("setBook", book);
      }
    },
    async setBookDateRead({ commit, rootState }, { id, dateRead }) {
      commit("setLoaded", false);
      const userId = rootState.auth.user.uid;
      const result = await setBook({ id, userId, dateRead });
      commit("setLoaded", true);
      if (result.ok) {
        commit("setBookDateRead", { id, dateRead });
      }
    },
    async removeBook({ commit, rootState }, { id }) {
      commit("setLoaded", false);
      const userId = rootState.auth.user.uid;
      const result = await removeBook({ userId, id });
      commit("setLoaded", true);
      if (result.ok) {
        commit("removeBook", { id });
      }
    },
    async fetchUserBooks({ commit, rootState }) {
      commit("setLoaded", false);
      const userId = rootState.auth.user.uid;
      const books = await fetchUserBooks(userId);
      commit("setLoaded", true);
      commit("setBooks", books);
    },
    async fetchBookById({ commit, rootState }, { id }) {
      commit("setLoaded", false);
      const userId = rootState.auth.user.uid;
      const book = await fetchBookById({ id, userId });
      commit("setLoaded", true);
      commit("setBook", book);
    },
  },
  getters: {
    filteredBooks: (state) =>
      state.books.filter((b) => Boolean(b.dateRead) === state.showRead),
    showRead: (state) => state.showRead,
    getBookById: (state) => (id) => state.books.find((b) => b.id === id),
    getLoaded: (state) => state.loaded,
  },
};
