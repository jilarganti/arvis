import { resolve } from 'node:path'

function r(p: string) {
    return resolve(__dirname, p)
}

export const alias: Record<string, string> = {
    '@arvis': r('./apps/a.r.v.i.s./src/'),
    '@utils': r('./packages/utils/src/'),
}
