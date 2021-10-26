module.exports = {
  //   "/work/": ["Vodafone", "UILego"],
  "/work/": require("../work/sidebar.js"),
  // "/study-notes/code/": [{title: "bbc", path: './bbc', children: ['./bbc/index.html']},"code-2"],
  "/study-notes/code/": require("../study-notes/code/sidebar.js"),
  "/study-notes/design/": require("../study-notes/design/sidebar.js"),
};
