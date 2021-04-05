<template>
  <div class="LoginBlock">
      <div class="SwitchBar">
          <router-link class="logword" to="/Home/LoginBlock/LoginCom">登陆</router-link>
          <span class="logline">|</span>
          <router-link class="logword" to="/Home/LoginBlock/RegisterCom">注册</router-link>
      </div>
      <router-view></router-view>
  </div>
</template>
<script>
export default {
}
</script>

<style lang="scss">
.LoginBlock{
    width:1400px;
    margin:40px auto 0 auto;
    .SwitchBar{
        width:150px;
        height:40px; 
        margin:auto;
        .logword{
            text-decoration: none;
            line-height: 40px;
            font-size: 30px ;
            color:rgba($color: #000000, $alpha: 0.8);
        }
        .logline{
            font-size:35px;
            color:rgba($color: #000000, $alpha: 0.8);
            
        }
        .router-link-active{
            color: #77befc;
        }
        
    }
    
}
</style>