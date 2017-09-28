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
  </ul><button data-toggle="modal" data-target="#myModal">click</button>
  <!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Modal title</h4>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</div>
`,
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
