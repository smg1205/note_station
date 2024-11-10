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
// highlightjs 核心代码
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import Prism from 'prismjs';
// 代码高亮
import 'prismjs/components/prism-json';
// 选择使用主题
VMdPreview.use(githubTheme, {Prism,});
VueMarkdownEditor.use(githubTheme);


const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(ElementPlus).use(createPinia()).use(routers).use(ArcoVue).use(VueMarkdownEditor).use(VMdPreview)
app.mount('#app')