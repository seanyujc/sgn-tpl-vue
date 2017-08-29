import moment from "moment";
import Vue from "vue";
import Component from "vue-class-component";
import HeaderBar from "../components/headerBar";
import Common from "../core/common";

@Component({
  template: `<div>
  <header-bar title="home">xxx</header-bar>
  <ul>
    <li>{{today}}</li>
    <li>{{tomorrow}}</li>
  </ul><button @click="show()">click</button></div>`,
  components: { HeaderBar },
})
export default class HomePage extends Vue {
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
