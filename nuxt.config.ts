// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from 'path'
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  alias: {
    'assets': resolve(__dirname, 'assets'),
  },
})
