<template>
    <form action="" class="LoginCom"> 
        <input class="userbox" type="text" placeholder="输入用户名" />  
        <input class="passwordbox" type="text" placeholder="输入用户密码" />
        <button class="submit" @click="login">登录</button>  
    </form>
</template>

<script>
export default {

}
</script>

<style>
.LoginCom{
    width:400px;
    height:250px;
    margin:auto;
    margin-top:70px;
    border-radius: 10px;
    box-shadow: 2px 2px 6px rgba(56, 33, 33, .12), -2px -2px 6px rgba(56, 33, 33, .12);
    position:relative;    
}
.userbox{
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
.passwordbox{
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
.submit{
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
    top:170px;
    
}

button:focus, input:focus{
    outline:none;

}

    
</style>