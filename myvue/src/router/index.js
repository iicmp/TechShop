import { createRouter, createWebHistory } from 'vue-router'
import HomeA from '@/views/HomeA.vue'
import HomeB from '@/views/HomeB.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import ShopCart from '@/views/ShopCart.vue'

import Computer from '@/components/Home/HomeB/Goods/Computer.vue'
import HardWare from '@/components/Home/HomeB/Goods/HardWare'
import NetDevice from '@/components/Home/HomeB/Goods/NetDevice'
import Phone from '@/components/Home/HomeB/Goods/Phone'
import Television from '@/components/Home/HomeB/Goods/Television'

const routes = [
  {
    path: '/',
    redirect:'/HomeA',
  },
  {
      path:'/HomeA',
      name:HomeA,
      component:HomeA
  },
  {
    path: '/HomeB',
    name: 'HomeB',
    component: HomeB,
    children:[
        {
            path:'Computer',
            component:Computer
        },
        {
            path:'HardWare',
            component:HardWare
        },
        {
            path:'NetDevice',
            component:NetDevice
        },
        {
            path:'Phone',
            component:Phone
        },
        {
            path:'Television/:routee',
            component:Television
        }
    ]
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
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
