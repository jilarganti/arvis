import { resolve } from 'node:path'

function r(p: string) {
    return resolve(__dirname, p)
}

export const alias: Record<string, string> = {
    arvis: r('./apps/a.r.v.i.s./src/'),
    '@arvis/site': r('./apps/site/src/'),
    '@arvis/utils': r('./packages/utils/src/'),
    '@arvis/ai': r('./packages/ai/src/'),
    '@arvis/link': r('./packages/link/src/'),
}
