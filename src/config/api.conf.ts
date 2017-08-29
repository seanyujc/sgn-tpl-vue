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
        fetchPlanList: "promotor:/app/plan/list", // ?openId=ofq36s-R8ZnbZjZvhTa9sSWP-51k&status=1
    },
};
export default apiConfig;
