import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";

Vue.use(VueRouter);
const routes: RouteConfig[] = [
  { path: "/home", component: HomePage },
  { path: "/login", component: LoginPage },
];

const router = new VueRouter({
  routes,
});

export default router;
