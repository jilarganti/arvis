import { defineConfig } from 'vitepress'
import { shared } from './shared'
import { en } from './en'
// import { zh } from './zh'
import { ru } from './ru'

export default defineConfig({
    ...shared,
    locales: {
        root: { label: 'English', ...en },
        // zh: { label: '简体中文', ...zh },
        ru: { label: 'Русский', ...ru }
    }
})