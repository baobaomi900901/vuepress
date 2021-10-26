const pluginsConf = require('./config/pluginsConf')
// const sidebarConf = require('./config/sidebarConf')

module.exports = {
  base: "/",
  title: "MobyTang",
  plugins: pluginsConf,
  themeConfig: {
    type:"blog",
    logo: "/assets/img/logo.png",
    // 禁止导航栏
    // navbar:false,
    // 导航栏内容
    lastUpdated: "最近更新时间", // string | boolean
    author: "Moby",
    search: true,
    searchMaxSuggestions: 10,
    nav: require("./nav.js"),
    // 侧边栏
    sidebar: require("./sidebar.js"),
    // sidebar: sidebarConf,
    sidebarDept: 2,
    // ICP 备案
    // record: '',
    // recordlink: '',
    // 公网安备备案
    // cyberSecurityRecord:'',
    // cyberSecurityLink:'',
    // 友情链接
    // friendLink:[{title:'',desc:'',email:'',link:''}]

  },
};
