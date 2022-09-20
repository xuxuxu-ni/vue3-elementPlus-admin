import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/iconfont/iconfont.css'
import 'font-awesome/css/font-awesome.css'
// @ts-ignore
import i18n from './i18n/i18n'
import { createPinia } from 'pinia'
import '@/router/permission'
import permission from '@/directive/permission/button.js'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(ElementPlus)
app.directive('roleBtn', permission)


app.mount('#app')
