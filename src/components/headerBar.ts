import Vue from "vue";
import Component from "vue-class-component";

@Component({
    template: `<header>
  <div>{{title}}</div>
  <router-link to="login">登录</router-link>
</header>`,
    props: {
        title: String,
    },
})
export default class HeaderBar extends Vue {

}
