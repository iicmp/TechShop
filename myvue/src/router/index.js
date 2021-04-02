import { createRouter,createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'


import Computer from '@/components/CenterBlock/CenterCom/Computer.vue'
import HardWare from '@/components/CenterBlock/CenterCom/HardWare.vue'
import NetDevice from '@/components/CenterBlock/CenterCom/NetDevice.vue'
import Phone from '@/components/CenterBlock/CenterCom/Phone.vue'
import Television from '@/components/CenterBlock/CenterCom/Television.vue'


const routes = [
  {
    path: '/',
    redirect:'/Home',
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    redirect:'/Home/Phone',
    children:[
        {
            path:'Computer',
            component:Computer
        },
        {
            path:'Phone',
            component:Phone
        },
        {
            path:'Television',
            component:Television
        },
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
        
    ]
  },
//   {
//     path: '/ShopCart',
//     name: 'ShopCart',
//     component: ShopCart,
//   },
//   {
//     path: '/Login',
//     name: 'Login',
//     component: Login
//   },
//   {
//     path: '/Register',
//     name: 'Register',
//     component: Register
//   },
 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
