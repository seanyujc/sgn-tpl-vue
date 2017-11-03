import Vue from "vue";
import Datepicker from "./components/datepicker";
import HeaderBar from "./components/headerBar";

const components = {
  Datepicker,
  HeaderBar,
};

Vue
  .component("HeaderBar", HeaderBar)
  .component("Datepicker", Datepicker)
  ;

export default {
  HeaderBar,
};
