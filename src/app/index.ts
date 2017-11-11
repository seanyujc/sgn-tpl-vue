import Vue from "vue";
import { SGVFactory } from "../lib/sgn-resource";
import HeaderBar from "./components/headerBar";
import { apiConfig, mockData, serverConfig } from "./config";
import Common from "./core/common";
import "./index.component";
import router from "./index.router";
import "./styles/common.scss";
require("bootstrap-loader");
import Component from "vue-class-component";

SGVFactory.createConfigAdapter(apiConfig, serverConfig, mockData);

Component.registerHooks([
  "beforeRouteEnter",
  "beforeRouteLeave",
  "beforeRouteUpdate",
]);

const vm = new Vue({
  router,
}).$mount("#app");
