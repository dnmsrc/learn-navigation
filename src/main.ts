import { createApp } from 'vue'
import App from './App.vue'
// @ts-ignore
import router from '@/router/index'
// @ts-ignore
import store from '@/store/index'

createApp(App).use(router).use(store).mount('#app')
