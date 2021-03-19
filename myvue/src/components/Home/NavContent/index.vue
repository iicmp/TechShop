<template>
  <div class="navContent">
      <div class="nav">
            <a class="homeA" @click="homeA">home</a> 
            <router-link class="phone" to="/HomeB/Phone">手机</router-link>
            <router-link class="television" to="/HomeB/Television">电视</router-link>
            <router-link class="computer" to="/HomeB/Computer">电脑</router-link>
            <router-link class="hardware" to="/HomeB/HardWare">智能硬件</router-link>
            <router-link class="netdevice" to="/HomeB/NetDevice">网络设备</router-link>
            <input type="text" class="search-text" placeholder="搜索">
            <button class="search-button">
                <span>search</span>
            </button>
      </div>
      <router-view/>
  </div>
</template>

<script>
export default {
    name:'NavContent',
    methods:{
        homeA(){
            this.$router.replace('/homeA');
        }
    }

}
</script>

<style scoped lang="scss">
.navContent{
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
                margin-right: 200px;
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
                margin-left: 80px;
                width: 200px;
                height: 43px;
                border-radius: 3px 0 0 3px;
                border: 1px #2c3e50 solid;
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
                border: 1px #2c3e50 solid;
                background-color: #2c3e50;
                color:#fff;
                vertical-align: middle;
            }
        }

}
</style>