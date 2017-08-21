import moment from "moment";
import Vue from "vue";
import Component from "vue-class-component";
import Common from "../core/common";

@Component({
  template: "<div><ul><li>{{today}}</li><li>{{tomorrow}}</li></ul><button @click='show()'>click</button></div>",
})
export default class HomeComponent extends Vue {
  today: string = moment().format("YYYY-MM-DD");

  show() {
    const msg = this.today;
    Common.showMsg(msg);
  }

  get tomorrow(){
    const t = moment().add(7, "days");
    return t.format("YYYY-MM-DD");
  }
}