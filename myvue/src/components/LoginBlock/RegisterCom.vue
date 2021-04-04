<template>
  <form action="" class="RegisterCom">

        <input class="Ruserbox" type="text" placeholder="输入用户名" />  
        <input class="Rpasswordbox" type="text" placeholder="输入用户密码" />
        <input class="RTpasswordbox" type="text" placeholder="确认密码" />
        <button class="Rsubmit" @click="login">注册</button>  

  </form>
</template>

<script>
export default {

}
</script>

<style>
.RegisterCom{
    width:400px;
    height:320px;
    margin:auto;
    margin-top:70px;
    border-radius: 10px;
    box-shadow: 2px 2px 6px rgba(56, 33, 33, .12), -2px -2px 6px rgba(56, 33, 33, .12);
    position:relative;    
}
.Ruserbox{
    width:250px;
    height:40px;
    border:1px solid #cbecfe;
    background-image: url("~@/assets/profile.png");

    background-size: 35px 35px;
    background-repeat:no-repeat;
    padding-left:35px;
    box-shadow: 1px 1px 4px rgba(56, 33, 33, .12), -1px -1px 4px rgba(56, 33, 33, .12);

    position:absolute;
    left:70px;
    top:30px;

}
.Rpasswordbox{
    width:250px;
    height:40px;
    border:1px solid #cbecfe;
    background-image: url("~@/assets/password.png");
    background-size: 35px 35px;
    background-repeat:no-repeat;
    padding-left:35px;
    box-shadow: 1px 1px 4px rgba(56, 33, 33, .12), -1px -1px 4px rgba(56, 33, 33, .12);

    position:absolute;
    left:70px;
    top:100px;

}
.RTpasswordbox{
    width:250px;
    height:40px;
    border:1px solid #cbecfe;
    background-image: url("~@/assets/password.png");
    background-size: 35px 35px;
    background-repeat:no-repeat;
    padding-left:35px;
    box-shadow: 1px 1px 4px rgba(56, 33, 33, .12), -1px -1px 4px rgba(56, 33, 33, .12);

    position:absolute;
    left:70px;
    top:170px;

}
.Rsubmit{
    width:125px;
    height:40px;
    border:none;
    border-radius: 5px;
    color:#fff;
    font-size:25px;
    background-color: #77befc;
    box-shadow: 1px 1px 2px rgba(119, 190, 252), -1px -1px 2px rgba(119, 190, 252);

    position:absolute;
    left:132px;
    top:240px;
    
}

button:focus, input:focus{
    outline:none;

}
</style>