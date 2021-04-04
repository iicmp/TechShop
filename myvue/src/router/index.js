import { createRouter,createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'

import GoodsBlock from '@/components/GoodsBlock/GoodsBlock.vue'
import BottomBar from '@/components/BottomBar'
import LoginBlock from '@/components/LoginBlock/LoginBlock.vue'

import Computer from '@/components/GoodsBlock/GoodsCom/Computer.vue'
import HardWare from '@/components/GoodsBlock/GoodsCom/HardWare.vue'
import NetDevice from '@/components/GoodsBlock/GoodsCom/NetDevice.vue'
import Phone from '@/components/GoodsBlock/GoodsCom/Phone.vue'
import Television from '@/components/GoodsBlock/GoodsCom/Television.vue'

import LoginCom from "@/components/LoginBlock/LoginCom.vue";
import RegisterCom from "@/components/LoginBlock/RegisterCom.vue";


const routes = [
  {
    path: '/',
    redirect:'/Home',
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    redirect:'/Home/GoodsBlock',
    children:[
        {
            path:'GoodsBlock',
            components:{
                center:GoodsBlock,
                bottom:BottomBar
            },
            redirect:'/Home/GoodsBlock/Phone',
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
        {
            path:'LoginBlock',
            redirect:'/Home/LoginBlock/LoginCom',
            components:{
                center:LoginBlock,   
            },
            children:[
                {
                    path:'LoginCom',
                    component:LoginCom
                },
                {
                    path:'RegisterCom',
                    component:RegisterCom
                },
                
            ]
        },


        
        
        
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
