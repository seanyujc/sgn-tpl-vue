import Vue from "vue";
import Component from "vue-class-component";
import HeaderBar from "../components/headerBar";
import Common from "../core/common";
import { MissionInfo } from "../core/domain";
import Person, { IPerson } from "../core/services/person";

@Component({
  template: `<div>
  <header-bar title="登陆"></header-bar>
  <form @submit.prevent="toLogin">
    <div class="form-group">
      <label for="loginName">登录名</label>
      <input type="text" v-model="loginName" class="form-control" id="loginName" placeholder="请输入登录名">
    </div>
    <div class="from-group">
      <label for="passwd">密　码</label>
      <input type="password" class="formcontrol" id="passwd" placeholder="请输入密码">
    </div>
    <button>提交</button>
  </form>
</div>`,
  components: { HeaderBar },
})
export default class LoginPage extends Vue {
  person: IPerson = new Person();
  loginName: string = "";
  toLogin() {
    // this.person.getUserKey(+this.loginName).then((res) => {
    //   console.log(res);
    // });
    this.person.fetchMissionhallList<{ msg: string; code: number; data: MissionInfo[] }>().then((res) => {
      console.log(res.data);
    }).catch((reason) => {
      console.log(reason);
    });
  }
}
