import { defineConfig } from "vitepress"
import { search as ruSearch } from "./ru"

export const shared = defineConfig({
  title: "A.R.V.I.S.",

  srcDir: "./docs",

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  markdown: {
    math: true,
    codeTransformers: [
      // We use `[!!code` in demo to prevent transformation, here we revert it back.
      {
        postprocess(code) {
          return code.replace(/\[!!code/g, "[!code")
        },
      },
    ],
  },

  sitemap: {
    hostname: "https://vitepress.dev",
    transformItems(items) {
      return items.filter((item) => !item.url.includes("migration"))
    },
  },

  /* prettier-ignore */
  head: [
        // ['link', { rel: 'icon', type: 'image/svg+xml', href: '/vitepress-logo-mini.svg' }],
        // ['link', { rel: 'icon', type: 'image/png', href: '/play.png' }],
        ['meta', { name: 'theme-color', content: '#5f67ee' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:locale', content: 'en' }],
        ['meta', { property: 'og:title', content: 'A.R.V.I.S. | AI for Result-Driven Meetings' }],
        ['meta', { property: 'og:site_name', content: 'A.R.V.I.S.' }],
        // ['meta', { property: 'og:image', content: 'https://vitepress.dev/vitepress-og.jpg' }],
        ['meta', { property: 'og:url', content: 'https://arvis-doc.vercel.app/' }],
        // ['script', { src: 'https://cdn.usefathom.com/script.js', 'data-site': 'AZBRSFGG', 'data-spa': 'auto', defer: '' }]
    ],

  themeConfig: {
    logo: {
      light: "/LogoDark.png",
      dark: "/LogoLight.png",
    },

    socialLinks: [{ icon: "github", link: "https://github.com/jilarganti/arvis" }],

    editLink: {
      pattern: "https://github.com/jilarganti/arvis/edit/main/packages/site/:path",
    },

    search: {
      provider: "algolia",
      options: {
        appId: "OAF8W52W8I",
        apiKey: "12c782af03f5595d06a56e517eb8c67b",
        indexName: "arvis-doc",
        locales: { ...ruSearch },
      },
    },
  },
})
