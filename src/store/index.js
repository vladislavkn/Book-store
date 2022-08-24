import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import books from "./books";
import { setAuthStateListener } from "../services/authApi";
import VuexPersistence from "vuex-persist";

const vuexLocal = new VuexPersistence({
  reducer: (state) => ({ auth: { user: state.auth.user } }),
  storage: window.localStorage,
});

Vue.use(Vuex);

setAuthStateListener((user) => {
  store.commit("setUser", user);
});

const store = new Vuex.Store({
  plugins: [vuexLocal.plugin],
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

export default store;
