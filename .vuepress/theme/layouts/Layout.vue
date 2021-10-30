<template>
  <div class="theme-layout">
    <Header class="theme-layout__header" />
    <component :is="layout" class="theme-layout__content" />
    <!-- <Footer class="theme-layout__footer" /> -->
  </div>
</template>

<script>
import HomeLayout from './HomeLayout'
import PostLayout from './PostLayout'
import Header from '@theme/components/Header'
import Footer from '@theme/components/Footer'

export default {
  name: 'Layout',
  components: {
    HomeLayout,
    PostLayout,
    Header,
    Footer
  },
  provide () {
    return {
      rootLayout: this
    }
  },
  computed: {
    layout () {
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          return this.$frontmatter.layout
        }
        if (this.$page.path === '/') return 'HomeLayout'
        return 'PostLayout'
      }
      return 'NotFound'
    },
    posts () {
      const posts = this.$site.pages
        .filter(page => page.path.startsWith('/posts/') && page.path !== '/posts/')
        .sort((prev, next) => {
          return new Date(next.frontmatter.published_at) - new Date(prev.frontmatter.published_at)
        })
      return posts
    },
  }
}
const head = document.querySelector("head")
head.insertAdjacentHTML("afterbegin",`<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet">
`)

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap');

.theme-layout{
  @apply h-full w-full
}

.theme-layout > .theme-layout__header{
  @apply h-20 px-16
}

.theme-layout > .theme-layout__content{
  @apply flex justify-center items-center
}

.theme-layout > .theme-layout__footer{
  @apply flex justify-center items-center h-16 w-full
}
.site-header {
  @apply bg-none absolute w-full
}

.container{
  max-width: 100vw;
}

html,
body {
  user-select: none;
  /* overscroll-behavior: none; */
}

html {
  -webkit-text-size-adjust: 100%;
  height: 100%;
}

* {
  padding: 0;
  margin: 0;
  font-family: 'Titillium Web', sans-serif;
  /* overflow: hidden; */
  user-select: none;
}

body {
  -webkit-overflow-scrolling: touch;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

</style>
