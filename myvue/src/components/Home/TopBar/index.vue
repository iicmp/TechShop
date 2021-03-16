<template>
    <div class="top">
        <span>登陆</span>
        <span>注册</span>
        <span>购物车</span>
    </div>
</template>

<script>
export default {
    name:"TopBar"
}
</script>

<style scoped lang="scss">
.top{
    height:45px;
    background-color: #35495e;
    span{
        float:right;
        color:#b0b0b0;
        font-size: 18px;
        line-height: 45px;
        margin-right: 20px;
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