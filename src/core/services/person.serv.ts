import { IProxyHttp, SGNFactory } from "../../../lib/sgn-resource";
import { apiConfig, serverConfig } from "../../config";
import { MissionInfo } from "../domain";

export interface IPersonService {
  uploadPics(files: any[]): Promise<any>;
  /**
   * 获取userKey
   */
  getUserKey(userId: number): Promise<any>;
}

class PersonService implements IPersonService {
  proxyHttp: IProxyHttp;

  constructor() {
    this.proxyHttp = SGNFactory.ProxyHttpCreator(apiConfig, serverConfig);
    this.proxyHttp.SuccessCode = "0";
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

  getUserKey(userId: number) {
    return this.proxyHttp.post<{ msg: string; code: string; userKey: string }, any>("getUserKey", {
      sourceCode: "2",
      sourceUserId: userId,
      // sourceUserId: 69,
      userName: "jcyu",
      headUrl: encodeURIComponent("http://ucenter.51cto.com/avatar.php?uid=1383716&size=middle"),
      sex: "1",
      phone: "18623233333",
      email: "exxx@lb.com",
      registerTime: "2016-10-01 22:00:00",
    });
  }

}

export default PersonService;
