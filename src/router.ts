import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeComponent from "./pages/home";
Vue.use(VueRouter);
const routes: RouteConfig[] = [
  { path: "/home", component: HomeComponent }
];

const router = new VueRouter({
  routes,
});

export default router;
