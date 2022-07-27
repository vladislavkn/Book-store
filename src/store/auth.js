import {
  loginUser,
  logout,
  registerUser,
  loginWithGoogle,
} from "../services/authApi";

export default {
  state: () => ({
    user: null,
  }),
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    registerUser({ commit }, { email, password }) {
      return registerUser(email, password).then((user) => {
        commit("setUser", user);
      });
    },
    loginUser({ commit }, { email, password }) {
      return loginUser(email, password).then((user) => {
        commit("setUser", user);
      });
    },
    loginWithGoogle({ commit }) {
      return loginWithGoogle().then((user) => {
        commit("setUser", user);
      });
    },
    logout({ commit }) {
      return logout().then(() => {
        commit("setUser", null);
      });
    },
  },
  getters: {
    isAuthentificated: (state) => state.user !== null,
  },
};
