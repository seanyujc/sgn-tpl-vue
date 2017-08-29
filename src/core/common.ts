import { Env } from "../../lib/sgn-resource";

declare var NODE_ENV: string;
declare var PUBLIC_PATH: string;

export default class Common {
  static showMsg(msg = "123") {
    alert(msg);
  }

  static getEnv(): Env {
    let env = Env.DEV;
    if (NODE_ENV === "TEST") {
      env = Env.TEST;
    } else if (NODE_ENV === "PRO") {
      env = Env.PRO;
    }
    return env;
  }
  /**
   * 得到环境变量的配置
   */
  static getPublicPath() {
    return PUBLIC_PATH;
  }
}
