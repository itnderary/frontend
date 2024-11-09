import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import VTooltip from "v-tooltip";

Vue.use(VTooltip);

// Disable production tip
Vue.config.productionTip = false;

// Create Vue instance
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
