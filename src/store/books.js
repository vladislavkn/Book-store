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
  }),
  mutations: {
    addBook(state, book) {
      const hasBook = ~state.books.findIndex((b) => b.id === book.id);
      if (!hasBook) {
        state.books.push(book);
      }
    },
    removeBook(state, book) {
      state.books = state.books.filter((b) => b.id !== book.id);
    },
  },
};
