import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/assets/iconfont/iconfont.css"
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';




// Vue.config.productionTip=false
// 挂载axios到vue的原型，由于继承性，所有的组件都可以使用this.$http
import axios from 'axios';
// Vue.prototype.$http=axios;
let app = createApp(App)// 获取应用实例
app.config.globalProperties.$http=axios
axios.defaults.baseURL='http://localhost:3000';

app.use(ElementPlus)
app.use(store).use(router).mount('#app')
