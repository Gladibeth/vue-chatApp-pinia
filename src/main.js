import { createApp } from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
import './index.css'
import { Icon } from '@iconify/vue';
import { main } from './core/auth'
const app = createApp(App)

app.use(router)
app.use(store)
app.component("Icon", Icon)

main()
app.mount('#app')
