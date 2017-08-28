import { AxiosPromise } from "axios";
import Common, { ICommon } from "./common";
import { Env, IApiConfig, IHost, IServerConfig, ISite } from "./config";

export interface IProxyHttp {
    get<T, K>(api: string, params: K): AxiosPromise;
    post<T, K>(api: string, params: K): AxiosPromise;
    form<T>(api: string, form: FormData): AxiosPromise;
}

class ProxyHttp implements IProxyHttp {

    constructor(private apiConfig: IApiConfig, private serverConfig: IServerConfig) {
        const URL_TPL = "//{DOMAIN}{HOST_API}?appId=APPID&path=PATH&state=!STATE";

    }

    get<T, K>(api: string, params: K): AxiosPromise {
        throw new Error("Method not implemented.");
    }
    post<T, K>(api: string, params: K): AxiosPromise {
        throw new Error("Method not implemented.");
    }
    form<T>(api: string, form: FormData): AxiosPromise {
        throw new Error("Method not implemented.");
    }
}
