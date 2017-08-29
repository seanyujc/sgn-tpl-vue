import Axios, { AxiosPromise, AxiosResponse } from "axios";
import qs from "qs";
import Common, { ICommon } from "./common";
import { Env, IApiConfig, IHost, IServerConfig, ISite } from "./config";

/**
 * 返回值类型
 */
interface ISgnResponse<T> extends AxiosResponse {
    data: T;
}

/**
 * 自定义类型
 */
// tslint:disable-next-line:no-empty-interface
interface ISgnPromise<T> extends Promise<ISgnResponse<T>> {

}

export interface IProxyHttp {

    get<T, K>(api: string, params: K): Promise<T>;
    post<T, K>(api: string, params: K): Promise<T>;
    form<T>(api: string, form: FormData): Promise<T>;
}

export class ProxyHttp implements IProxyHttp {

    private common: ICommon;
    private successCode: string;

    constructor(private apiConfig: IApiConfig, private serverConfig: IServerConfig) {
        const URL_TPL = "//{DOMAIN}{HOST_API}?appId=APPID&path=PATH&state=!STATE";
        this.common = new Common(apiConfig, serverConfig);
        this.successCode = "000000";
    }

    get<T, K>(api: string, params: K): Promise<T> {
        const url = this.common.dealPath(api, "GET");
        return Axios.get(url, { params }).then((res) => {
            const promise = new Promise<any>((resolve, reject) => {
                if (res.data.code && res.data.code === this.successCode) {
                    resolve(res);
                } else {
                    reject(res);
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
                    if (res.data.code && res.data.code === this.successCode) {
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
