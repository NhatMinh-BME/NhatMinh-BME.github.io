import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Nguyen Nhat Minh | Portfolio",
  description: "Personal portfolio of Nguyen Nhat Minh.",
  themeConfig: {
    siteTitle: 'NhatMinh-BME',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects' },
      { text: 'About', link: '/about' },
      { text: 'Faculty collaborators', link: '/collaborators' },
    ],
    outline: [2, 3],
    footer: {
      copyright: '© Nguyen Nhat Minh'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/NhatMinh-BME' },
    ],
    search: {
      provider: 'local'
    }

  },
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/images/favicon.svg' }]],
  markdown: {
    image: {
      // image lazy loading is disabled by default
      lazyLoading: true
    }
  },
  lastUpdated: true,


})
