import $ from "jquery";
import Vue from "vue";
import Component from "vue-class-component";
import { AutowiredService } from "../../../lib/sg-resource/decorators";
import Common from "../../core/common";
import { Services } from "../../core/factory.serv";
import { IPersonService } from "../../core/services/person.serv";

// console.log(styles);
// @ServiceInjection("personService")
@Component({
  template: require("./login.html"),
  // components: { HeaderBar },
  mounted: () => {
    // const file = new File([""], "file.txt");
    const file: any = document.getElementById("file");
    console.log(file);
  },
})
export default class LoginPage extends Vue {

  @AutowiredService
  personService: IPersonService;

  errCode: string = "";
  errMsg: string = "";
  mobile: string = "";
  pwd: string = "";
  title: string = "Login";

  submit(errors: any) {
    // console.log(errors.all());
    if (errors.any()) {
      return;
    }

    this.personService.login(this.mobile, this.pwd).then((data) => {
      console.log(data);
    });
  }

  get tomorrow() {
    return new Date();
  }

}
