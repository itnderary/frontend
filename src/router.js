import Vue from "vue";
import VueRouter from "vue-router";
import UserRegister from "./views/UserRegister.vue";
import UserPreferences from "./views/UserPreferences.vue";
import UserSuggestions from "./views/UserSuggestions.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/register",
    name: "Register",
    component: UserRegister,
  },
  {
    path: "/preferences",
    name: "UserPreferences",
    component: UserPreferences,
  },
  {
    path: "/suggestions",
    name: "UserSuggestions",
    component: UserSuggestions,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
