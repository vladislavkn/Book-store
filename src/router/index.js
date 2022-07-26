import Vue from "vue";
import VueRouter from "vue-router";
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
    path: "/add-book/to/:to",
    name: "Add-book",
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
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthentificated = false;

  if (!isAuthentificated && !["/sign-up", "sign-in"].includes(to.path)) {
    next("/sign-up");
  } else {
    next();
  }
});

export default router;
