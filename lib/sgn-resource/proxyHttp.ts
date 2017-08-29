import Axios, { AxiosPromise, AxiosResponse } from "axios";
import Common, { ICommon } from "./common";
import { Env, IApiConfig, IHost, IServerConfig, ISite } from "./config";

/**
 * 返回值类型
 */
interface ISgnResponse<T> extends AxiosResponse {
  data: T;
}

/**
 * 
 */
interface ISgnPromise<T> extends Promise<ISgnResponse<T>> {

}

export interface IProxyHttp {
  get<T, K>(api: string, params: K): ISgnPromise<T | any>;
  post<T, K>(api: string, params: K): ISgnPromise<T | any>;
  form<T>(api: string, form: FormData): ISgnPromise<T | any>;
}

class ProxyHttp implements IProxyHttp {

  private common: ICommon;
  constructor(private apiConfig: IApiConfig, private serverConfig: IServerConfig) {
    const URL_TPL = "//{DOMAIN}{HOST_API}?appId=APPID&path=PATH&state=!STATE";
    this.common = new Common(apiConfig, serverConfig);
  }

  get<T, K>(api: string, params: K): ISgnPromise<T | any> {
    const url = this.common.dealPath(api, "GET");
    return Axios.get(url, { params }).then((res) => {
      const promise = new Promise<any>((resolve, reject) => {
        if (res.data.code && res.data.code === "000000") {

        }
        resolve(res);
      });
      return promise;
    });
  }
  post<T, K>(api: string, data: K): AxiosPromise {
    const url = this.common.dealPath(api, "POST");
    return Axios.post(url, data).then((res) => {
      const promise = new Promise<any>((resolve, reject) => {
        if (res.data.code && res.data.code === "000000") {
          
        }
        resolve(res);
      });
      return promise;
    });
  }
  form<T>(api: string, form: FormData): AxiosPromise {
    throw new Error("Method not implemented.");
  }
}
