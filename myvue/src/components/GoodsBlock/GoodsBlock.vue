<template>
  <div class="GoodsBlock">
      <div class="nav">
            <a>TechShop</a> 
            <router-link class="phone" to="/Home/GoodsBlock/Phone">手机</router-link>
            <router-link class="television" to="/Home/GoodsBlock/Television">电视</router-link>
            <router-link class="computer" to="/Home/GoodsBlock/Computer">电脑</router-link>
            <router-link class="hardware" to="/Home/GoodsBlock/HardWare">智能硬件</router-link>
            <router-link class="netdevice" to="/Home/GoodsBlock/NetDevice">网络设备</router-link>
            <input type="text" class="search-text" placeholder="搜索">
            <button class="search-button">
                <span></span>
            </button>
      </div>
      <router-view/>
  </div>
</template>

<script>
export default {
    name:'GoodsBlock',
    methods:{
        
    }

}
</script>

<style scoped lang="scss">
.GoodsBlock{
    width:1300px;
    margin:auto;
    
        .nav {
            height:70px;
            a {
                line-height: 70px;
                color: #242933;
            }
            a:hover {
                color: #76bdfb;
                cursor:pointer;
            }
            a:first-child {
                margin-right: 150px;
                font-size: 35px;
            }
            a:not(:first-child) {
                font-size: 18px;
                text-decoration: none;
                display: inline-block;
                margin-right: 80px;
            }
            .router-link-active{
                color: #76bdfb;
            }
            .search-text {
                margin-left: 85px;
                width: 200px;
                height: 43px;
                border-radius: 3px 0 0 3px;
                border: 1px #242933 solid;
                padding: 0;
                vertical-align: middle;
            }
            .search-button {
                padding: 0;
                border: 0;
                width: 45px;
                height: 45px;
                margin-left: -1px; 
                border-radius: 0 3px 3px 0;
                border: 1px #242933 solid;
                background-color: #242933;
                color:#fff;
                vertical-align: middle;
                background-image: url('~@/assets/search.png');
                background-size: 30px 30px;
                background-position: center;
                background-repeat: no-repeat;
            }
        }

}
</style>