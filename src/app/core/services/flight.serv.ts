import { IProxyHttp, SGNFactory } from "../../../lib/sgn-resource";
import { apiConfig, serverConfig } from "../../config";
import { MissionInfo } from "../domain";

export interface IFlightService {
  /**
   * 测试
   */
  fetchMissionhallList<T>(): Promise<T>;
}

class FlightService implements IFlightService {
  proxyHttp: IProxyHttp;

  constructor() {
    this.proxyHttp = SGNFactory.createProxyHttp(apiConfig, serverConfig);
    this.proxyHttp.SuccessCode = "0";
  }

  fetchMissionhallList(): Promise<any> {
    return this.proxyHttp.get("fetchMissionhallList",
      { openId: "ofq36s-R8ZnbZjZvhTa9sSWP-51k" });
  }

}
