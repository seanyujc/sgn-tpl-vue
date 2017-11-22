import VeeValidate from "vee-validate";
import Vue from "vue";
import { SGVFactory } from "../lib/sg-resource";
import HeaderBar from "./components/headerBar";
import { apiConfig, mockData, serverConfig } from "./config";
import Common from "./core/common";
import "./index.component";
import router from "./index.router";
import "./styles/common.scss";
require("bootstrap-loader");
import Component from "vue-class-component";

Vue.use(VeeValidate);
// 谁使用谁创建
SGVFactory.createConfigAdapter(apiConfig, serverConfig, mockData);

Component.registerHooks([
  "beforeRouteEnter",
  "beforeRouteLeave",
  "beforeRouteUpdate",
]);

const vm = new Vue({
  router,
}).$mount("#app");
