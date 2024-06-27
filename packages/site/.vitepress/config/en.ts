import { defineConfig, type DefaultTheme } from "vitepress"

export const en = defineConfig({
  lang: "en-US",
  // description: "Meet J.A.R.V.I.S.'s protégé, crafted to channel the essence of its mentor's brilliance into your meetings. This AI assistant leverages historical data to ensure your objectives are achieved, representing you with strategic insight and a focus on tangible results.",
  description:
    "Introducing J.A.R.V.I.S.'s apprentice, designed to bring the brilliance of its mentor into your meetings. This AI assistant uses past data to help you reach your goals, providing strategic advice and a focus on concrete outcomes.",
  // head: [['link', { rel: 'icon', href: '/LogoDark.png' }]],
  themeConfig: {
    nav: nav(),

    sidebar: {
      "/guide/": { base: "/guide/", items: sidebarDocs() },
      "/about/": { base: "/about/", items: sidebarAbout() },
    },

    // editLink: {
    //     pattern: 'https://github.com/vuejs/vitepress/edit/main/guide/:path',
    //     text: 'Edit this page on GitHub'
    // },

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024-present, Jil Arganti",
    },
  },
})

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: "Docs", link: "/guide/introduction", activeMatch: "/guide/" },
    { text: "About", link: "/about/team", activeMatch: "/about/" },
    {
      text: "Join",
      link: "https://zoom.us/join",
      target: "_self",
      rel: "noreferrer",
    },
    {
      text: "Host",
      items: [
        {
          text: "Public Meeting",
          items: [
            {
              text: "Create a meeting for later",
              link: "/ru/guide/meeting#create-a-meeting-for-later",
            },
            {
              text: "Start an instant meeting",
              link: "/ru/guide/meeting#start-an-instant-meeting",
            },
            {
              text: "Schedule in Calendar",
              link: "/ru/guide/meeting#schedule-in-calendar",
            },
          ],
        },
        {
          text: "Private Meeting",
          items: [
            {
              text: "Create a meeting for later",
              link: "/ru/guide/meeting#create-a-meeting-for-later-1",
            },
            {
              text: "Start an instant meeting",
              link: "/ru/guide/meeting#start-an-instant-meeting-1",
            },
            {
              text: "Schedule in Calendar",
              link: "/ru/guide/meeting#schedule-in-calendar-1",
            },
          ],
        },
      ],
    },
    {
      text: "Sign In",
      link: "https://zoom.us/signin#/login",
      target: "_self",
      rel: "noreferrer",
    },
  ]
}

function sidebarDocs(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Introduction",
      collapsed: true,
      items: [
        { text: "What is A.R.V.I.S.?", link: "introduction" },
        { text: "Privacy", link: "privacy" },
        { text: "Get Started", link: "get-started" },
      ],
    },
    {
      text: "Platform",
      collapsed: false,
      items: [
        {
          text: "Backend Architecture Specification",
          link: "vca_architecture",
        },
        { text: "AI assistants", link: "markdown" },
      ],
    },

    // { text: 'Config & API Reference', base: '/reference/', link: 'site-config' }
  ]
}

function sidebarAbout(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "About",
      items: [{ text: "Code Of Conduct", base: "/", link: "CODE_OF_CONDUCT" }],
    },
  ]
}
