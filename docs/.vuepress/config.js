module.exports = {
  themeConfig: {
    logo: "/assets/img/logo.png",
    // 禁止导航栏
    // navbar:false,
    // 导航栏内容
    lastUpdated: "更新时间", // string | boolean
    nav: [
      {
        text: "Work",
        ariaLabel: "Work Menu",
        link: "/work/Vodafone",
        items: [
          { text: "Vodafone", link: "/work/Vodafone/" },
          { text: "UILego", link: "/work/UILego/" },
        ],
      },
      {
        text: "Study",
        ariaLabel: "Study Menu",
        items: [
          { text: "Code", link: "/study-notes/code/" },
          { text: "UEdesign", link: "/study-notes/design/" },
        ],
      },
      { text: "About", link: "/about/" },
    ],
    // 侧边栏
    sidebar: {
      "/work/": ["Vodafone", "UILego"],
      // "/study-notes/code/": [{title: "bbc", path: './bbc', children: ['./bbc/index.html']},"code-2"],
      "/study-notes/code/": [
        'macos-ssh-github',
        "code-2",
      ],
      "/study-notes/design/": ["ue-1", "ue-2"],
    },
  },
};
