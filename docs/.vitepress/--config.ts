import { defineConfig } from 'vitepress'
import { withMermaid } from "vitepress-plugin-mermaid"


// https://vitepress.dev/reference/site-config
export default withMermaid({
  title: "A.R.V.I.S",
  description: "Equip your assistant to recall previous conversations, documents, chats, presentations, and all pertinent info for video meetings. It will then efficiently advise and stand in for you at meetings, ensuring seamless communication.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: '/play.png',
      dark: '/play.png',
    },
    nav: [
      { text: 'Guide', link: '/guide/', activeMatch: '/guide/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Нах', link: 'guide/why' },
      {
        text: 'New Meeting',
        items: [
          {
            text: 'Public Meeting',
            items: [
              { text: 'Create a meeting for later', link: '/item-1' },
              { text: 'Start an instant meeting', link: '/item-2' },
              { text: 'Shedule in Google Calendar', link: '/item-3' },
            ]
          },
          {
            text: 'Private Meeting',
            items: [
              { text: 'Create a meeting for later', link: '/item-1' },
              { text: 'Start an instant meeting', link: '/item-2' },
              { text: 'Shedule in Google Calendar', link: '/item-3' },
            ]
          },
        ],
      },

    ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'x', link: 'http://localhost:3001/' }
    ]
  },

  head: [['link', { rel: 'icon', href: '/play.png' }]],
  // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
  mermaid: {
  },
  // optionally set additional config for plugin itself with MermaidPluginConfig
  mermaidPlugin: {
    class: "mermaid my-class", // set additional css classes for parent container 
  },

})
