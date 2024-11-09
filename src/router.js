import { createRouter, createWebHistory } from "vue-router";
import UserRegister from "./views/UserRegister.vue";
import UserPreferences from "./views/UserPreferences.vue";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
