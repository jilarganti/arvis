import { defineConfig } from 'vitepress'
import algoliasearch from 'algoliasearch'

// import { search as zhSearch } from './zh'
import { search as ruSearch } from './ru'

export const shared = defineConfig({
    title: "A.R.V.I.S",

    lastUpdated: true,
    cleanUrls: true,
    metaChunk: true,

    markdown: {
        math: true,
        codeTransformers: [
            // We use `[!!code` in demo to prevent transformation, here we revert it back.
            {
                postprocess(code) {
                    return code.replace(/\[\!\!code/g, '[!code')
                }
            }
        ]
    },

    sitemap: {
        hostname: 'https://vitepress.dev',
        transformItems(items) {
            return items.filter((item) => !item.url.includes('migration'))
        }
    },

    /* prettier-ignore */
    head: [
        ['link', { rel: 'icon', type: 'image/svg+xml', href: '/vitepress-logo-mini.svg' }],
        ['link', { rel: 'icon', type: 'image/png', href: '/vitepress-logo-mini.png' }],
        ['meta', { name: 'theme-color', content: '#5f67ee' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:locale', content: 'en' }],
        ['meta', { property: 'og:title', content: 'VitePress | Vite & Vue Powered Static Site Generator' }],
        ['meta', { property: 'og:site_name', content: 'VitePress' }],
        ['meta', { property: 'og:image', content: 'https://vitepress.dev/vitepress-og.jpg' }],
        ['meta', { property: 'og:url', content: 'https://vitepress.dev/' }],
        ['script', { src: 'https://cdn.usefathom.com/script.js', 'data-site': 'AZBRSFGG', 'data-spa': 'auto', defer: '' }]
    ],

    themeConfig: {
        // logo: { src: '/vitepress-logo-mini.svg', width: 24, height: 24 },
        logo: {
            light: '/play.png',
            dark: '/play.png',
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        ],

        search: {
            provider: 'algolia',
            options: {
                appId: 'OAF8W52W8I',
                apiKey: '9d785ee5b027174f12217ea63bc041a1',
                indexName: 'arvis-doc',
                // locales: { ...zhSearch, ...ruSearch }
                locales: { ...ruSearch }
            }
        },

        // carbonAds: { code: 'CEBDT27Y', placement: 'vuejsorg' }
    }
})