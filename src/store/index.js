import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import uniqid from "uniqid";
import auth from "./auth";
import { setAuthStateListener } from "../services/authApi";

Vue.use(Vuex);

const store = new Vuex.Store({
  plugins: [createPersistedState()],
  modules: { auth },
  state: {
    read: [],
    wishlist: [],
    locale: "en",
  },
  mutations: {
    addBook(state, { collection, book }) {
      state[collection].push(book);
    },
    removeBook(state, { collection, id }) {
      state[collection] = state[collection].filter((book) => book.id !== id);
    },
    updateBook(state, { collection, bookIndex, newBook }) {
      Vue.set(state[collection], bookIndex, newBook);
    },
    setLocale(state, newLocale) {
      state.locale = newLocale;
    },
  },
  actions: {
    moveBook({ getters, commit }, { from, to, id }) {
      const book = getters.getBook({ collection: from, id });
      commit("removeBook", { collection: from, id });
      commit("addBook", { collection: to, book });
    },
    addBook({ commit }, { collection, title, description = "" }) {
      commit("addBook", {
        book: { title, description, id: uniqid() },
        collection,
      });
    },
    updateBook({ getters, commit }, { collection, newBook }) {
      const bookIndex = getters.getBookIndex(collection, newBook.id);
      commit("updateBook", { bookIndex, newBook, collection });
    },
  },
  getters: {
    getBook:
      (state) =>
      ({ collection, id }) =>
        state[collection].find((book) => book.id === id),
    getBookIndex: (state) => (from, id) =>
      state[from].findIndex((book) => book.id === id),
    getLocale: (state) => (state.locale ? state.locale : "en"),
  },
});

setAuthStateListener((user) => {
  store.commit("setUser", user);
});

export default store;
