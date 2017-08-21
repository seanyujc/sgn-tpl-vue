import Vue from "vue";
import VueRouter from "vue-router";
import Common from "./core/common";
import router from "./router";

console.log(router);


const vm = new Vue({
  router,
}).$mount("#app");
