import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/assets/iconfont/iconfont.css"
import cookie from 'vue-cookie'
import axios from 'axios'

let app = createApp(App)
app.config.globalProperties.$http=axios
axios.defaults.baseURL='http://localhost:3000';

app.config.globalProperties.$cookie=cookie

app.use(store).use(router).mount('#app')
