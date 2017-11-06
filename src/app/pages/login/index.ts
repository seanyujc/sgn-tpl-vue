import Vue from "vue";
import Component from "vue-class-component";
import HeaderBar from "../../components/headerBar";
import Common from "../../core/common";
import { MissionInfo } from "../../core/domain";
import { Services } from "../../core/factory";
import { IPersonService } from "../../core/services/person.serv";
import router from "../../index.router";

@Component({
  template: require("!!raw-loader!./login.html"),
  components: { HeaderBar },
})
export default class LoginPage extends Vue {
  person: IPersonService = Services.createPersonService();
  loginName: string = "";
  passwd: string = "";
  toLogin() {
    this.person.login(this.loginName, this.passwd).then((res) => {
      console.log(res);
      router.push("home");
    });
  }
}
