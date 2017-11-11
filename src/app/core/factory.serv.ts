import { IProxyHttp, SGVFactory } from "../../lib/sgn-resource";
import { apiConfig, serverConfig } from "../config";
import { createPersonService, IPersonService, PersonService } from "./services/person.serv";

export class Services {
  static personService: IPersonService;
  static createProxyHttp(): IProxyHttp {
    return SGVFactory.createProxyHttp();
  }
  static createPersonService() {
    if (!!this.personService) {
      return this.personService;
    }
    return this.personService = createPersonService(PersonService);
  }
}
