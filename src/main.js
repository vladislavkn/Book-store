import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
import "./assets/css/tailwind.css";

Vue.config.productionTip = false;
Vue.use(VueToast, {
  queue: true,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
