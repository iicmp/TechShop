import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import ShopCart from '@/views/ShopCart.vue'



const routes = [
  {
    path: '/',
    redirect:'/Home',
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/ShopCart',
    name: 'ShopCart',
    component: ShopCart,
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
