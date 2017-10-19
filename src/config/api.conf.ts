import { IApiConfig, IHosts } from "../../lib/sgn-resource";
export const apiConfig: IApiConfig = {
    hosts: {
        tps: { dir: "" },
        promotor: { dir: "/promotor", domain: "api.duileme.cn" },
    },
    post: {
        // 5.1	获取用户key接口
        getUserKey: "tps:/users", // ? sourceCode=&sourceUserId=&userName=&headUrl=&sex=&phone=&email=
        // 5.4	城市列表查询接口
        fetchAirports: "tps:/city/list", // ?sourceCode=&userKey=
        // 5.5	航班查询接口
        fetchFlights: "tps:/flight/flightQuery", // ?sourceCode=&userKey=&startCityCode=&endCityCode=&startDate=&voyageType=
        // 航线政策查询接口 ?sourceCode=&userKey=&startCityThreeCode=&endCityThreeCode=&startDate=&voyageType=&flightNo=&cabins
        fetchCabins: "tps:/flight/routePolicyQuery",
        // 创建订单接口
        fetchCreateOrder: "tps:/order/createOrder",
        //  5.8 新增乘客接口 ?sourceCode&=userKey&=passengerName&=cardType&=cardNo&=contactNumber
        addPerson: "tps:/passenger/addPassengerInfo",
        // 5.9修改乘客接口?sourceCode&=userKey&=passengerId&=passengerName&=cardType&=cardNo&=contactNumber
        chanePerson: "tps:/passenger/editPassengerInfo",
        // 5.10删除乘客接口 ?sourceCode=&userKey=&passengerId
        deletePerson: "tps:/passenger/deletePassengerInfo",
        // 5.11乘客列表查询接口 ? sourceCode=&userKey=
        passengerList: "tps:/passenger/getPassengerList",
        // 5.13 列表订单查询接口? sourceCode=&userKey=
        orderListCheck: "tps:/userOrder/allOrderQuery",
        // 5.14 订单详情查询接口? sourceCode=&userKey=&orderNo=&orderFlag=&orderStatus
        orderInfoDetail: "tps:/userOrder/orderInfoQuery",
        // 5.15 订单取消删除接口?sourceCode userKey orderNo type
        delCancelOrders: "tps:/order/cancelOrDelOrder",
        // 5.16 退票申请  ?sourceCode userKey orderNo refundCause imageUrl remark
        applicationRefund: "tps:/userOrder/refundOrder",
        // 5.18 5.18用户信息查询接口
        GetUserInfo: "tps:/user/getUserInfo",
        fetchPayOrder: "tps:/pay/payOrder",
        // 上传图片
        uploadPics: "tps:/fileUpload/pic",
    },
    get: {
        fetchMissionhallList: "promotor:/app/missionhall/list", // ?openId=ofq36s-R8ZnbZjZvhTa9sSWP-51k
    },
};
