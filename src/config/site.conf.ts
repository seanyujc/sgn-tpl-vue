import {Env, IServerConfig } from "../../lib/sgn-resource";
import Common from "../core/common";

export const serverConfig: IServerConfig = {
    env: Common.getEnv(),
    debug: false,
    protocol: window.location.protocol,
    publicPath: Common.getPublicPath(),
    successCode: "000000",
    sites: {},
};
// 开发、测试、生产环境配置 remote: 远端API地址，local和appID在微信中调用jsapi使用。
serverConfig.sites[Env.DEV] = { remote: "127.0.0.1:3001", local: "dh5.lianbi.com.cn", appID: "xxx" };
serverConfig.sites[Env.TEST] = { remote: "172.16.103.211", local: "dh5.lianbi.com.cn", appID: "xxx" };
serverConfig.sites[Env.PRO] = { remote: "172.16.103.211", local: "dh5.lianbi.com.cn", appID: "xxx" };
