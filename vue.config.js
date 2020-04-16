const path = require("path"); // 引入path模块
function resolve(dir) {
  return path.join(__dirname, dir); // path.join(__dirname)设置绝对路径
}

module.exports = {
  chainWebpack: config => {
    // 设置路径别名
    config.resolve.alias.set("@", resolve("./src"));
  }
};
