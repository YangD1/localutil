import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'element-plus/dist/index.css'
import router from './router'

const app: any = createApp(App)
app.use(router)
// app.use(router).use(store)

app.mount('#app')
