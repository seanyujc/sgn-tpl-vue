import Vue from "vue";
import Component from "vue-class-component";

@Component({
    template: `<header>{{title}}</header>`,
    props: {
        title: String,
    }
})
export default class HeaderBar extends Vue {

}