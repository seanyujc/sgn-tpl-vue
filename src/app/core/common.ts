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

  static merge(left: any[], right: any[]) {
    const result = [];
    while (left.length > 0 && right.length > 0) {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    return result.concat(left).concat(right);
  }

  static mergeSort(items: any[]) {
    if (items.length === 1) {
      return items;
    }
    const middle = Math.floor(items.length / 2);
    const left = items.slice(0, middle);
    const right = items.slice(middle);
    return this.merge(this.mergeSort(left), this.mergeSort(right));
  }
}