import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import auth from "./auth";
import books from "./books";
import { setAuthStateListener } from "../services/authApi";

Vue.use(Vuex);

const store = new Vuex.Store({
  plugins: [createPersistedState()],
  modules: { auth, books },
  state: {
    locale: "en",
  },
  mutations: {
    setLocale(state, newLocale) {
      state.locale = newLocale;
    },
  },
  getters: {
    getLocale: (state) => (state.locale ? state.locale : "en"),
  },
});

setAuthStateListener((user) => {
  store.commit("setUser", user);
});

export default store;
