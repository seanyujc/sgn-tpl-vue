import Vue from "vue";
import VueRouter from "vue-router";
import HeaderBar from "./components/headerBar";
import Common from "./core/common";
import "./index.component";
import router from "./index.router";
import "./styles/common.scss";
require("bootstrap-loader");

// import "../lib/jquery";

const vm = new Vue({
  router,
}).$mount("#app");
