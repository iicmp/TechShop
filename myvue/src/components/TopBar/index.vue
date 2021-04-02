<template>
    <div class="top">
        <!-- <span @click="login">登陆</span>
        <span @click="register">注册</span>
        <span @click="shopcart">购物车</span> -->
        
            <span >登陆</span>
            <span>注册</span>
            <span >购物车</span>
      
        
    </div>
</template>

<script>
export default {
    name:"TopBar",
    methods:{
        login() {
　　　　　　　　　　// 假设登陆成功，则跳转到 index 组件
                this.$router.replace('/Login');
        },
        register() {
　　　　　　　　　　// 假设登陆成功，则跳转到 index 组件
                this.$router.replace('/Register');
        },
        shopcart() {
　　　　　　　　　　// 假设登陆成功，则跳转到 index 组件
                this.$router.replace('/ShopCart');
        },
    }
}
</script>

<style scoped lang="scss">
.top{
    height:40px;
    width: 1300px;
    margin:auto;
    background-color: #242933;
     z-index: 1;
    
    
    span{
        float:right;
        color:#b0b0b0;
        font-size: 18px;
        line-height: 40px;
        margin-right: 20px;
        z-index: 2;
    }
    span:first-child{
        margin-right: 80px;
    }
    span:last-child{
        margin-right: 80px;
    }
    span:hover{
        color:#fff;
        cursor:pointer;
    }
}
</style>