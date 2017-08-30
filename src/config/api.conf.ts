import { IApiConfig, IHosts } from "../../lib/sgn-resource";
const apiConfig: IApiConfig = {
    hosts: {
        tps: { dir: "/tps" },
        promotor: { dir: "/promotor" },
    },
    post: {
        // 5.1	获取用户key接口
        getUserKey: "tps:/user/getUserKey", // ? sourceCode=&sourceUserId=&userName=&headUrl=&sex=&phone=&email=

    },
    get: {
        fetchMissionhallList: "promotor:/app/missionhall/list", // ?openId=ofq36s-R8ZnbZjZvhTa9sSWP-51k
    },
};
export default apiConfig;
