/**
 * 环境枚举
 */
export const enum Env {
    DEV = 1,
    TEST,
    PRO,
}

/**
 * 站点信息
 */
export interface ISite {
    local: string;
    remote: string;
    appID: string;
}

/**
 * 主机信息
 */
export interface IHost {
    domain?: string;
    dir: string;
}

/**
 * 主机、站点集合对象
 */
export declare interface IHosts { [key: string]: IHost; }
export declare interface ISites { [key: string]: ISite; }

/**
 * 接口配置对象
 */
export interface IApiConfig {
    hosts: IHosts;
    post: { [key: string]: string };
    get: { [key: string]: string };
}

/**
 * 服务器配置对象
 */
export interface IServerConfig {
    env: Env;
    debug: boolean;
    protocol: string;
    publicPath: string;
    sites: ISites;
    wXJsSign: string;
    wXOAuth: string;
    jsApiList: string[];
}
