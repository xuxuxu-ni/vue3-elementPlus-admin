import { createI18n } from 'vue-i18n'
// @ts-ignore
import messages from './lang'

const i18n = createI18n({
  locale: localStorage.lang || 'cn',
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
  // If you need to specify other options, you can set other options
  // ...
})


export default i18n
