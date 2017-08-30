import { IProxyHttp, ProxyHttp } from "../../../lib/sgn-resource";
import apiConfig from "../../config/api.conf";
import serverConfig from "../../config/site.conf";
import { MissionInfo } from "../domain";

export interface IPerson {
  getUserKey: (userId: number) => Promise<any>;
  fetchMissionhallList: <T>() => Promise<T>;
}

class Person implements IPerson {
  proxyHttp: IProxyHttp;
  constructor() {
    this.proxyHttp = new ProxyHttp(apiConfig, serverConfig);
    this.proxyHttp.SuccessCode = "0";
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

  fetchMissionhallList<T>(): Promise<T> {
    return this.proxyHttp.get<T, { openId: string; }>("fetchMissionhallList",
      { openId: "ofq36s-R8ZnbZjZvhTa9sSWP-51k" });
  }
}

export default Person;
