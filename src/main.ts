import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { createPinia } from 'pinia'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.use(createPinia())

app.mount('#app')
