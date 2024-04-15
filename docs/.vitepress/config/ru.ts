
import { defineConfig, type DefaultTheme } from 'vitepress'

export const ru = defineConfig({
    lang: 'ru-RU',
    description: "Meet J.A.R.V.I.S.'s protégé, crafted to channel the essence of its mentor's brilliance into your meetings. This AI assistant leverages historical data to ensure your objectives are achieved, representing you with strategic insight and a focus on tangible results.",
    head: [['link', { rel: 'icon', href: '/play.png' }]],
    themeConfig: {

        nav: nav(),

        sidebar: {
            '/ru/guide/': { base: '/ru/guide/', items: sidebarGuide() },
            // '/ru/reference/': { base: '/ru/reference/', items: sidebarReference() }
        },

        // editLink: {
        //     pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
        //     text: 'Edit this page on GitHub'
        // },

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2024-present, Jil Arganti'
        }
    }
})

function nav(): DefaultTheme.NavItem[] {
    return [
        { text: 'Guide', link: '/ru/guide/introduction', activeMatch: '/ru/guide/introduction' },
        // { text: 'Reference', link: '/ru/guide/introduction', activeMatch: '/ru/guide/introduction' },
        { text: 'Join', link: 'https://zoom.us/join', target: '_self', rel: 'noreferrer' },
        {
            text: 'Host',
            items: [
                {
                    text: 'Public Meeting',
                    items: [
                        { text: 'Create a meeting for later', link: '/ru/guide/meeting#create-a-meeting-for-later' },
                        { text: 'Start an instant meeting', link: '/ru/guide/meeting#start-an-instant-meeting' },
                        { text: 'Shedule in Calendar', link: '/ru/guide/meeting#shedule-in-calendar' },
                    ]
                },
                {
                    text: 'Private Meeting',
                    items: [
                        { text: 'Create a meeting for later', link: '/ru/guide/meeting#create-a-meeting-for-later-1' },
                        { text: 'Start an instant meeting', link: '/ru/guide/meeting#start-an-instant-meeting-1' },
                        { text: 'Shedule in Calendar', link: '/ru/guide/meeting#shedule-in-calendar-1' },
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
            text: 'Введение',
            collapsed: true,
            items: [
                { text: 'Что такое A.R.V.I.S.?', link: 'introduction' },
                { text: 'Начало работы', link: 'get-started' },
            ]
        },
        {
            text: 'Стек',
            collapsed: false,
            items: [
                { text: 'Наш медиадвижок', link: 'markdown' },
                { text: 'Наши ИИ ассистенты', link: 'markdown' },
                { text: 'Интеграции', link: 'markdown' },

            ]
        },

        { text: 'Config & API Reference', base: '/reference/', link: 'site-config' }
    ]
}

function sidebarReference(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Справочник',
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

export const search: DefaultTheme.AlgoliaSearchOptions['locales'] = {
    ru: {
        placeholder: 'Поиск',
        translations: {
            button: {
                buttonText: 'Поиск',
                buttonAriaLabel: 'Поиск'
            },
            modal: {
                searchBox: {
                    resetButtonTitle: 'Очистить поиск',
                    resetButtonAriaLabel: 'Очистить поиск',
                    cancelButtonText: 'Закрыть',
                    cancelButtonAriaLabel: 'Закрыть'
                },
                startScreen: {
                    recentSearchesTitle: 'История поиска',
                    noRecentSearchesText: 'Нет результатов поиска',
                    saveRecentSearchButtonTitle: 'Сохранить историю поиска',
                    removeRecentSearchButtonTitle: 'Удалить историю поиска',
                    favoriteSearchesTitle: 'Избранное',
                    removeFavoriteSearchButtonTitle: 'Удалить из избранного',
                },
                errorScreen: {
                    titleText: 'Невозможно получить результаты',
                    helpText: 'Проверьте подключение к сети'
                },
                footer: {
                    selectText: 'Выбрать',
                    navigateText: 'Следующий',
                    closeText: 'Закрыть',
                    searchByText: ''
                },
                noResultsScreen: {
                    noResultsText: 'Не найдено',
                    suggestedQueryText: 'Попробуйте так',
                    reportMissingResultsText: 'Должны ли быть результаты по этому запросу?',
                    reportMissingResultsLinkText: 'Отправить отзыв'
                }
            }
        }
    }
}