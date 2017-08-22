import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomePage from "./pages/home";

Vue.use(VueRouter);
const routes: RouteConfig[] = [
  { path: "/home", component: HomePage }
];

const router = new VueRouter({
  routes,
});

export default router;
