import { IProxyHttp } from "../../../lib/sgn-resource";
import { MissionInfo } from "../domain";
import { Services } from "../factory";

export interface IPersonService {
  uploadPics(files: any[]): Promise<any>;
  /**
   * 获取userKey
   */
  login(mobile: string, pwd: string): Promise<any>;
  getUserInfo(): Promise<any>;
}

interface IPersonServiceConstructor {
  new(): IPersonService;
}

export function createPersonService(ctor: IPersonServiceConstructor): IPersonService {
  return new ctor();
}

export class PersonService implements IPersonService {
  proxyHttp: IProxyHttp;

  constructor() {
    this.proxyHttp = Services.createProxyHttp();
  }

  login(mobile: string, pwd: string): Promise<any> {
    return this.proxyHttp.post("login", { mobile, pwd });
  }
  getUserInfo(): Promise<any> {
    throw new Error("Method not implemented.");
  }

  uploadPics(files: any[]): Promise<any> {
    const formData = new FormData();
    for (const key in files) {
      if (files.hasOwnProperty(key)) {
        const element = files[key];
        formData.append("files", element);
      }
    }
    return this.proxyHttp.form("uploadPics", formData);
  }

}
