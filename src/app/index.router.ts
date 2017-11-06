import Vue from "vue";
import VueRouter, { RouteConfig } from "../lib/vue-router";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";

import {homePagePreloading} from "./pages/factory";

Vue.use(VueRouter);
const routes: RouteConfig[] = [
  { path: "/home", component: homePagePreloading },
  { path: "/login", component: LoginPage },
  { path: "*", component: homePagePreloading },
];

const router = new VueRouter({
  routes,
});

export default router;
