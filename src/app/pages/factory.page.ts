
// SGV-BUILD-PAGE-FAC
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
