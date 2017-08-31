import { Common, IApiConfig, ICommon, IProxyHttp, IServerConfig, ProxyHttp } from "./index";

export abstract class SGNFactory {
  static common: ICommon;
  static proxyHttp: IProxyHttp;
  static ProxyHttpCreator(apiConfig: IApiConfig, serverConfig: IServerConfig): IProxyHttp {
    if (!this.proxyHttp) {
      this.proxyHttp = new ProxyHttp(this.CommonCreator(apiConfig, serverConfig));
    }
    return this.proxyHttp;
  }

  static CommonCreator(apiConfig: IApiConfig, serverConfig: IServerConfig) {
    if (!this.common) {
      this.common = new Common(apiConfig, serverConfig);
    }
    return this.common;
  }

}
