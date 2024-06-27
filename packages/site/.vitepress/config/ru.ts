import { defineConfig, type DefaultTheme } from "vitepress"

export const ru = defineConfig({
  lang: "ru-RU",
  description: "Видеовстречи с поддержкой ИИ-помощника",
  // head: [['link', { rel: 'icon', href: '/LogoDark.png' }]],
  themeConfig: {
    nav: nav(),

    sidebar: {
      "/ru/guide/": { base: "/ru/guide/", items: sidebarDocs() },
      "/ru/about/": { base: "/ru/about/", items: sidebarAbout() },
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
    { text: "Дока", link: "/ru/guide/introduction", activeMatch: "/ru/guide/" },
    { text: "О нас", link: "/ru/about/team", activeMatch: "/ru/about/" },
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
      text: "Введение",
      collapsed: false,
      items: [
        { text: "Что такое A.R.V.I.S.?", link: "introduction" },
        { text: "Конфиденциальность данных", link: "privacy" },
        { text: "Начало работы", link: "get-started" },
      ],
    },
    {
      text: "Стек",
      collapsed: true,
      items: [
        { text: "Медиа SDK", link: "markdown" },
        { text: "ИИ ассистенты", link: "markdown" },
        // { text: 'Интеграции', link: 'markdown' },
      ],
    },

    // { text: 'Config & API Reference', base: '/reference/', link: 'site-config' }
  ]
}

function sidebarAbout(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "О нас",
      items: [
        { text: "Code Of Conduct", base: "/", link: "CODE_OF_CONDUCT" },
        // {
        //     text: 'Default Theme',
        //     base: '/reference/default-theme-',
        //     items: [
        //         { text: 'Overview', link: 'config' },

        //     ]
        // }
      ],
    },
  ]
}

export const search: DefaultTheme.AlgoliaSearchOptions["locales"] = {
  ru: {
    placeholder: "Поиск",
    translations: {
      button: {
        buttonText: "Поиск",
        buttonAriaLabel: "Поиск",
      },
      modal: {
        searchBox: {
          resetButtonTitle: "Очистить поиск",
          resetButtonAriaLabel: "Очистить поиск",
          cancelButtonText: "Закрыть",
          cancelButtonAriaLabel: "Закрыть",
        },
        startScreen: {
          recentSearchesTitle: "История поиска",
          noRecentSearchesText: "Нет результатов поиска",
          saveRecentSearchButtonTitle: "Сохранить историю поиска",
          removeRecentSearchButtonTitle: "Удалить историю поиска",
          favoriteSearchesTitle: "Избранное",
          removeFavoriteSearchButtonTitle: "Удалить из избранного",
        },
        errorScreen: {
          titleText: "Невозможно получить результаты",
          helpText: "Проверьте подключение к сети",
        },
        footer: {
          selectText: "Выбрать",
          navigateText: "Следующий",
          closeText: "Закрыть",
          searchByText: "",
        },
        noResultsScreen: {
          noResultsText: "Не найдено",
          suggestedQueryText: "Попробуйте так",
          reportMissingResultsText: "Должны ли быть результаты по этому запросу?",
          reportMissingResultsLinkText: "Отправить отзыв",
        },
      },
    },
  },
}
