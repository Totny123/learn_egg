// config/config.default.js
const path = require('path');

module.exports = {
  // 会被cookies插件读取
  keys: 'who',
  // 会被egg-static插件读取
  static: {
    prefix: '/static',
  },
  view: {
    root: path.resolve(__dirname, '../app/view'), // 需要配置绝对路径
    cache: true,
    // 配置文件由哪种模板引擎渲染
    mapping: {
      '.ejs': 'ejs',
      '.html': 'ejs',
    },
    defaultViewEngine: 'ejs',
    defaultExtension: '.ejs',
  },
  // 配置全局中间件
  middleware: ['mymid'],
  // 配置中间件的options
  mymid:{
    name:'mymid'
  }
};
