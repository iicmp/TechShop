<template>
    <div class="topContainer">
        <div class="topBar">
            <span class="left" @click="goHome">home</span>
            <span class="right registerBtn" @click="goRegister">注册</span>
            <span class="right loginBtn" @click="goLogin">登陆</span>
            <span class="right shopCartBtn" @click="goShopCart">购物车</span>  
        </div>
    </div>
    
</template>

<script>
export default {
    name:"TopBar",
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
    
    .right:last-child{
        margin-right: 80px;
    }
    .right:hover{
        color:#fff;
        cursor:pointer;
    }
}
</style>