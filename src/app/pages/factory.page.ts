
// SGV-BUILD-PAGE-FAC # NOT DELETE
// 'Login' PAGE FACTORY START
export function loginPagePreloading(): Promise<any> {
  return new Promise((resolve, reject) => {
    require.ensure([], (require) => {
      const login = require<{ default: any }>("./login/login.module").default;
      resolve(login);
    });
  });
}
// 'Login' PAGE FACTORY END
// 'Home' PAGE FACTORY START
export function homePagePreloading(): Promise<any> {
  return new Promise((resolve, reject) => {
    require.ensure([], (require) => {
      const home = require<{ default: any }>("./home").default;
      resolve(home);
    });
  });
}
// 'Home' PAGE FACTORY END
