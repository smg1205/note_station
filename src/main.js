import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'
import App from './App.vue'
import "@/style/style.css"
import routers from './router/routers.js'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import '@/assets/fonts/font.css'
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import 'element-plus/theme-chalk/dark/css-vars.css'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(ElementPlus).use(createPinia()).use(routers).use(ArcoVue)
app.mount('#app')