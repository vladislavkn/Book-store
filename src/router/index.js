import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Books.vue"),
  },
  {
    path: "/wishlist",
    name: "Wishlist",
    component: () => import("../views/Wishlist.vue"),
  },
  {
    path: "/add",
    name: "Add",
    component: () => import("../views/AddBook.vue"),
  },
  {
    path: "/edit-book/:id/in/:in",
    name: "Edit-book",
    component: () => import("../views/EditBook.vue"),
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
