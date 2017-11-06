import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";

// const HomePage = () => import("./pages/home");

Vue.use(VueRouter);
const routes: RouteConfig[] = [
  { path: "/home", component: HomePage },
  { path: "/login", component: LoginPage },
  { path: "*", component: HomePage },
];

const router = new VueRouter({
  routes,
});

export default router;
