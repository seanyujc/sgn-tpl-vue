import {Env, IServerConfig } from "../../lib/sgn-resource";
import Common from "../core/common";

const serverConfig: IServerConfig = {
    env: Common.getEnv(),
    debug: false,
    protocol: window.location.protocol,
    publicPath: "",
    sites: {},
};
serverConfig.sites[Env.DEV] = { local: "dh5.lianbi.com.cn", remote: "api.duileme.cn", appID: "xxx" };
serverConfig.sites[Env.TEST] = { local: "dh5.lianbi.com.cn", remote: "172.16.103.211", appID: "xxx" };
serverConfig.sites[Env.PRO] = { local: "dh5.lianbi.com.cn", remote: "172.16.103.211", appID: "xxx" };

export default serverConfig;
