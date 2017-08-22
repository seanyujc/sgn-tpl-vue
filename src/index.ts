import Vue from "vue";
import VueRouter from "vue-router";
import Common from "./core/common";
import components from "./index.component";
import router from "./index.router";

console.log(router);

const vm = new Vue({
  router,
  components,
}).$mount("#app");
