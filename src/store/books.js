export class Book {
  constructor({ title, author, id, dateRead = null }) {
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
  }),
  mutations: {
    addBook(state, book) {
      const bookIndex = state.books.findIndex((b) => b.id === book.id);
      if (!~bookIndex) {
        state.books.push(book);
      } else {
        state.books[bookIndex].dateRead = new Date();
      }
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
  },
  actions: {
    addBookFromForm({ commit }, { title, author, isRead, id }) {
      const book = new Book({
        title,
        author,
        dateRead: isRead ? new Date() : null,
        id,
      });
      commit("addBook", book);
    },
    setBookDateRead({ commit }, { id, dateRead }) {
      // TODO: sync with server
      commit("setBookDateRead", { id, dateRead });
    },
    removeBook({ commit }, { id }) {
      // TODO: sync with server
      commit("removeBook", { id });
    },
  },
  getters: {
    filteredBooks: (state) =>
      state.books.filter((b) => Boolean(b.dateRead) === state.showRead),
    showRead: (state) => state.showRead,
  },
};
