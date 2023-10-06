import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  title: "MoneyMaker-wiki",
  description: "送给技术人的商业知识手册 📓 ｜Business Knowledge Handbook for Hackers 🍻",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Reference', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '第一章：商业知识基础',
        items: [
          {
            items: [
              { text: '从摆脱打工人思维开始', link: '/chat-about-something.md' },
            ]
          }
        ]
      }
    ],

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },


    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Firevvork/MoneyMaker-wiki' }
    ],

    footer: {
      message: 'Released under the Creative Commons BY-SA 4.0 License.',
      copyright: 'Copyright © 2023-present Warden and Community'
    }
  }
})
