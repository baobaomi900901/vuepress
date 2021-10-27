const { path } = require('@vuepress/shared-utils')

module.exports = {
  title: 'MobyTang',
  description: 'VuePress Recipes for Using Tailwind',
  themeConfig: {
    nav: [
      { text: 'HOME', link: '/' },
      { text: 'POSTS', link: '/posts/' },
      { text: 'WORK', link: '/posts/work/' }
    ]
  },
  alias: {
    '@': path.resolve(__dirname, '../.vuepress')
  },
  postcss: {
    plugins: [
      require('tailwindcss'),
      require('autoprefixer')
    ]
  }
}
