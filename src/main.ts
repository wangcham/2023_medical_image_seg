import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { post } from './utils/index';

// 引入Element+
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//引入全局icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
app.config.globalProperties.$http = {
    post
}
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(ElementPlus)
app.use(store)
app.use(router)
app.mount('#app')