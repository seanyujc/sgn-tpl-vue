import Axios, { AxiosPromise, AxiosResponse } from "axios";
import qs from "qs";
import { Common, ICommon } from "./common";
import { Env, IApiConfig, IHost, IServerConfig, ISite } from "./config";

export interface IProxyHttp {
  SuccessCode: string;
  /**
   * 代理get请求
   * @param api config定义的接口名
   * @param params 请求参数
   */
  get<T, K>(api: string, params: K): Promise<T>;
  /**
   * 代理post请求
   * @param api config定义的接口
   * @param params 请求参数
   */
  post<T, K>(api: string, params: K): Promise<T>;
  form<T>(api: string, form: FormData): Promise<T>;
}

export class ProxyHttp implements IProxyHttp {

  private successCode: string;

  constructor(private common: ICommon) {
    this.successCode = "000000";
  }

  get<T, K>(api: string, params: K): Promise<T> {
    const url = this.common.dealPath(api, "GET");
    return Axios.get(url, { params }).then((res) => {
      const promise = new Promise<T>((resolve, reject) => {
        if (res.data.hasOwnProperty("code") && String(res.data.code) === this.successCode) {
          resolve(res.data);
        } else {
          reject(res.data);
        }
      });
      return promise;
    });
  }
  post<T, K>(api: string, data: K): Promise<T> {
    const url = this.common.dealPath(api, "POST");
    return Axios.post(url, qs.stringify(data),
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }).then((res) => {
        const promise = new Promise<T>((resolve, reject) => {
          if (res.data.hasOwnProperty("code") && String(res.data.code) === this.successCode) {
            resolve(res.data);
          } else {
            reject(res.data);
          }
        });
        return promise;
      });
  }
  form<T>(api: string, form: FormData): Promise<T> {
    throw new Error("Method not implemented.");
  }

  set SuccessCode(theSuccessCode: string) {
    this.successCode = theSuccessCode;
  }
}
