
import { defineConfig, type DefaultTheme } from 'vitepress'

export const en = defineConfig({
    lang: 'en-US',
    description: "Meet J.A.R.V.I.S.'s protégé, crafted to channel the essence of its mentor's brilliance into your meetings. This AI assistant leverages historical data to ensure your objectives are achieved, representing you with strategic insight and a focus on tangible results.",
    head: [['link', { rel: 'icon', href: '/play.png' }]],
    themeConfig: {

        nav: nav(),

        sidebar: {
            '/guide/': { base: '/guide/', items: sidebarGuide() },
            // '/reference/': { base: '/reference/', items: sidebarReference() }
        },

        // editLink: {
        //     pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
        //     text: 'Edit this page on GitHub'
        // },

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2024-present, MindMeeting OÜ'
        }
    }
})

function nav(): DefaultTheme.NavItem[] {
    return [
        { text: 'Guide', link: '/guide/introduction', activeMatch: '/guide/' },
        { text: 'Join', link: 'https://zoom.us/join', target: '_self', rel: 'noreferrer' },
        {
            text: 'Host',
            items: [
                {
                    text: 'Public Meeting',
                    items: [
                        { text: 'Create a meeting for later', link: '/guide/meeting#create-a-meeting-for-later' },
                        { text: 'Start an instant meeting', link: '/guide/meeting#start-an-instant-meeting' },
                        { text: 'Shedule in Calendar', link: '/guide/meeting#shedule-in-calendar' },
                    ]
                },
                {
                    text: 'Private Meeting',
                    items: [
                        { text: 'Create a meeting for later', link: '/guide/meeting#create-a-meeting-for-later-1' },
                        { text: 'Start an instant meeting', link: '/guide/meeting#start-an-instant-meeting-1' },
                        { text: 'Shedule in Calendar', link: '/guide/meeting#shedule-in-calendar-1' },
                    ]
                },
            ],
        },
        { text: 'Sign In', link: 'https://zoom.us/signin#/login', target: '_self', rel: 'noreferrer' },
    ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Introduction',
            collapsed: true,
            items: [
                { text: 'What is A.R.V.I.S.?', link: 'introduction' },
                { text: 'Get Started', link: 'get-started' },
            ]
        },
        {
            text: 'Platform',
            collapsed: false,
            items: [
                { text: 'API Reference', link: 'markdown' },

            ]
        },

        { text: 'Config & API Reference', base: '/reference/', link: 'site-config' }
    ]
}

function sidebarReference(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Reference',
            items: [
                { text: 'API', link: 'api' },
                {
                    text: 'Default Theme',
                    base: '/reference/default-theme-',
                    items: [
                        { text: 'Overview', link: 'config' },

                    ]
                }
            ]
        }
    ]
}