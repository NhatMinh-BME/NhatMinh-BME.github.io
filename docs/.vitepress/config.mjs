import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Nguyen Le Y | Biomedical Engineer",
  description: "Portfolio of Nguyen Le Y, featuring biomedical instrumentation, embedded systems, hardware design, and research.",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/uroflowmeter' },
      { text: 'Experience', link: '/hardwaredevelopment' },
      { text: 'Research', link: '/publication' },
      { text: 'Writing', link: '/blogs' },
      { text: 'Tools', link: '/tools/' },
      { text: 'STM32 course (VI)', link: 'https://leybme.github.io/stm32-vi/' },
    ],

    sidebar: [
      {
        text: 'Projects',
        items: [
          { text: 'Uroflowmeter', link: '/uroflowmeter' },
          { text: 'Rocker shaker', link: '/rocker' },
          { text: 'Bioimpedance measurement', link: '/bioimpedance_measurement' },
          { text: 'Breast cancer image classification', link: '/ai-breast-cancer-classification' },
          { text: 'Automated trading system', link: '/autotradingsystem' },
        ],
      },
      {
        text: 'Experience',
        items: [
          { text: 'Hardware and firmware', link: '/hardwaredevelopment' },
          { text: '3D design and manufacturing', link: '/3ddesign' },
          { text: 'Research publications', link: '/publication' },
        ],
      },
      {
        text: 'Tools',
        items: [
          { text: 'Tools Overview', link: '/tools/' },
          { text: 'PT5 Reader', link: '/tools/pt5reader' },
        ],
      },
      {
        text: 'Writing',
        items: [
          { text: 'Conference abstract-book app', link: '/blogs/bmeconf' },
          { text: '3D printing settings', link: '/blogs/3dprintersettings' },
          { text: 'ESP32 JTAG debugging', link: '/esp32jtagdebug' },
        ],
      },
    ],
    footer: {
      message: 'Open to remote opportunities.',
      copyright: '© Nguyen Le Y'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/leybme' },
      { icon: 'facebook', link: 'https://facebook.com/ley995' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/nguyenley' },
    ],
    search: {
      provider: 'local'
    }

  },
  head: [['link', { rel: 'icon', href: '/images/favicon.ico' }]],
  markdown: {
    image: {
      // image lazy loading is disabled by default
      lazyLoading: true
    }
  },
  lastUpdated: true,


})
