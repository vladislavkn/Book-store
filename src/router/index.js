import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/add",
    name: "Add",
    component: () => import("../views/Add.vue"),
  },
  {
    path: "/book/:id",
    name: "Book",
    component: () => import("../views/Book.vue"),
  },
  {
    path: "/sign-up",
    name: "Sign-up",
    component: () => import("../views/Sign-up.vue"),
    meta: {
      availableForGuest: true,
    },
  },
  {
    path: "/sign-in",
    name: "Sign-in",
    component: () => import("../views/Sign-in.vue"),
    meta: {
      availableForGuest: true,
    },
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/Profile.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthentificated = store.getters.isAuthentificated;
  if (!isAuthentificated && !to.meta.availableForGuest) {
    next({ name: "Sign-up" });
  } else {
    next();
  }
});

export default router;
