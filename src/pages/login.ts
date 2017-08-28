import Vue from "vue";
import Component from "vue-class-component";
import HeaderBar from "../components/headerBar";
import Common from "../core/common";

@Component({
  template: `<div>
  <header-bar title="登陆"></header-bar>
  <form action="">
    <div class="form-group">
      <label for="loginName">登录名</label>
      <input type="text" class="form-control" id="loginName" placeholder="请输入登录名">
    </div>
    <div class="from-group">
      <label for="passwd">密　码</label>
      <input type="password" class="formcontrol" id="passwd" placeholder="请输入密码">
    </div>
  </form>
</div>`,
  components: { HeaderBar },
})
export default class LoginPage extends Vue {

}
