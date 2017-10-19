import { Env, IApiConfig, IHost, IServerConfig, ISite } from "./config";

export interface ICommonConstructor {
  new(apiConfig: IApiConfig, serverConfig: IServerConfig): ICommon;
}

export interface ICommon {
  successCode: string;
  /**
   * 去两端空格
   * @param s 字符串
   * @return 字符串
   */
  trim(s: string): string;
  /**
   * 处理路径
   * @param apiKey Api的配置key
   * @param method HTTP method (e.g. 'GET', 'POST', etc)
   */
  dealPath(apiKey: string, method: string): string;
}

export function createCommon(ctor: ICommonConstructor, apiConfig: IApiConfig, serverConfig: IServerConfig): ICommon {
  return new ctor(apiConfig, serverConfig);
}

export class Common implements ICommon {
  private env: Env;
  private debug: boolean;
  private protocol: string;
  private curSite: ISite;
  private domain: string;
  private localSite: string;
  private entrance: string;
  private jsSignUrl: string;
  private jsApiList: string[];
  private msgs: string[];
  private isShowModal: boolean;

  constructor(private apiConfig: IApiConfig, private serverConfig: IServerConfig) {
    const URL_TPL = "//{DOMAIN}{HOST_API}?appId=APPID&path=PATH&state=!STATE";

    this.env = serverConfig.env;
    this.debug = serverConfig.debug;
    this.protocol = serverConfig.protocol;
    this.curSite = serverConfig.sites[this.env];
    this.domain = this.curSite.remote;
    this.localSite = this.protocol + "//" + this.curSite.local + serverConfig.publicPath;
    this.entrance = this.protocol + URL_TPL.replace(/\{DOMAIN}/, this.curSite.remote).replace(/\{HOST_API}/, serverConfig.wXOAuth)
      .replace("APPID", this.curSite.appID);
    this.jsSignUrl = "//" + this.curSite.remote + serverConfig.wXJsSign;
    this.jsApiList = serverConfig.jsApiList;
    this.msgs = [];
    this.isShowModal = false;
  }

  dealPath(apiKey = "", method = "GET"): string {
    let api = "";
    let url = apiKey;
    method = method.toLocaleLowerCase();
    if (!this.apiConfig[method]) { return ""; }
    if (this.apiConfig[method][apiKey]) {
      api = this.apiConfig[method][apiKey];
      if (api.indexOf(":") !== -1) {
        url = "//{DOMAIN}{HOST}{API}";
        const path = api.split(":");
        path[0] = this.trim(path[0]);
        path[1] = this.trim(path[1]);
        const host: IHost = this.apiConfig.hosts[path[0]];
        const domain = host && host.domain ? host.domain : this.domain;
        url = url.replace(/\{DOMAIN}/, domain).replace(/\{HOST}/, host.dir).replace(/\{API}/, path[1]);
      } else {
        url = api;
      }
    }

    return url;
  }

  trim(s: string): string {
    return s.replace(/(^\s*)|(\s*$)/g, "");
  }

  public get successCode(): string {
    return this.serverConfig.successCode;
  }

}
