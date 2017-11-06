import Vue from "vue";
import VueRouter from "vue-router";
import { SGVFactory } from "../lib/sgn-resource";
import HeaderBar from "./components/headerBar";
import { apiConfig, mockData, serverConfig } from "./config";
import Common from "./core/common";
import "./index.component";
import router from "./index.router";
import "./styles/common.scss";
require("bootstrap-loader");

SGVFactory.createConfigAdapter(apiConfig, serverConfig, mockData);

const vm = new Vue({
  router,
}).$mount("#app");
