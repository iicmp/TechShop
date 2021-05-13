<template>
    <div class="topContainer">
        <div class="topBar">
            <span class="left" @click="goHome">home</span>

            <span class="right loginBtn" @click="goShopCart">购物车</span>
            <span v-if="isLogin" class="right registerBtn" @click="logout()">注销</span>
            <span v-else class="right registerBtn" @click="goRegister">注册</span>
            <span v-if="isLogin" class="right shopCartBtn">{{currentUser}}</span>
            <span v-else class="right shopCartBtn" @click="goLogin">登陆</span>  
            
        </div>
    </div>
    
</template>

<script>
export default {
    name:"TopBar",
    computed:{
        isLogin(){
            return this.$store.state.isLogin;
        },
        currentUser(){
            return this.$store.state.currentUser
        }
    },
    methods:{
        goHome(){
            this.$router.push({
                path:'/Home/GoodsBlock/Phone'
            })
        },
        goLogin() {
            this.$router.push({
                path:'/Home/LoginBlock/LoginCom'
            })
        },
        goRegister() {
　　　　　　　this.$router.push({
                path:'/Home/LoginBlock/RegisterCom'
            })
        },
        goShopCart() {
　　　　　　　this.$router.push({
                path:'/Home/ShopCartBlock'
            })
        },
        fixBar() {
            var scrollY = document.documentElement.scrollTop;
            if (scrollY > 0) {
                let bar = document.querySelector(".topContainer");
                bar.style.position = "fixed";
                bar.style.top = "0px";
                bar.style.zIndex = 3;               
            } else {
                let bar = document.querySelector(".topContainer");
                bar.style.position = "static";  
            }
        },
        logout(){
            this.$store.commit("setUser",'');
            this.$store.commit("toggleLogin");
        }
    },
    mounted() {
        addEventListener("scroll", this.fixBar, true);
    },
}
</script>

<style scoped lang="scss">
.topContainer{
    width:100%;
    height:40px;
    background-color: #242933;

}
.topBar{
    height:40px;
    width: 1400px;
    margin:auto;
    z-index: 1;
    
    
    .left{
        float:left;
        color:#b0b0b0;
        font-size: 20px;
        line-height: 40px;
        margin-left: 30px;
        z-index: 2;
    }
    .left:hover{
        color:#fff;
        cursor:pointer;
    }
    .right{
        float:right;
        color:#b0b0b0;
        font-size: 18px;
        line-height: 40px;
        margin-right: 20px;
        z-index: 2;
    } 
    .registerBtn{
        margin-right:70px;
    }
    .right:hover{
        color:#fff;
        cursor:pointer;
    }
    
}
</style>