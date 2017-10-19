import Vue from "vue";
import Component from "vue-class-component";
import HeaderBar from "../../components/headerBar";
import Common from "../../core/common";
import { MissionInfo } from "../../core/domain";
import PersonService, { IPersonService } from "../../core/services/person.serv";

@Component({
  template: require("!!raw-loader!./login.html"),
  components: { HeaderBar },
})
export default class LoginPage extends Vue {
  person: IPersonService = new PersonService();
  loginName: string = "";
  toLogin() {
    // this.person.getUserKey(+this.loginName).then((res) => {
    //   console.log(res);
    // });
    
  }
}
