import Vue from "vue";
import VueRouter from "vue-router";
import Common from "./core/common";
import router from "./index.router";
import "./sass/common.scss";

const vm = new Vue({
  router,
}).$mount("#app");
