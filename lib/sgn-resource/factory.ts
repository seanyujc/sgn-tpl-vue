import { Common, createCommon, ICommon, ICommonConstructor } from "./common";
import { IApiConfig, IServerConfig, ProxyHttp } from "./index";
import { createProxyHttp, IProxyHttp } from "./proxyHttp";

export abstract class SGNFactory {
  static common: ICommon;
  static proxyHttp: IProxyHttp;
  static createProxyHttp(apiConfig: IApiConfig, serverConfig: IServerConfig): IProxyHttp {
    if (!this.proxyHttp) {
      this.proxyHttp = createProxyHttp(ProxyHttp, this.createCommon(apiConfig, serverConfig));
    }
    return this.proxyHttp;
  }

  static createCommon(apiConfig: IApiConfig, serverConfig: IServerConfig) {
    if (!this.common) {
      this.common = createCommon(Common, apiConfig, serverConfig);
    }
    return this.common;
  }

}
