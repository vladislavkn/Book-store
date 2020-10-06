import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import "./assets/css/tailwind.css";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  mounted() {
    this.$i18n.locale = this.$store.getters.getLocale;
  },
  render: (h) => h(App),
}).$mount("#app");
