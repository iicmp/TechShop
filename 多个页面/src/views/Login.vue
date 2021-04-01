<template>
    <div class="wrap" id="wrap">
        <div class="logGet">
            <!-- 头部提示信息 -->
            <div class="logD logDtip">
                <p class="p1">登录</p>
            </div>
            <!-- 输入框 -->
            <div class="lgD">
                <img src="@/assets/profile.png" width="20" height="20" alt="" />
                <input type="text" placeholder="输入用户名" />
            </div>
            <div class="lgD">
                <img src="@/assets/password.png" width="20" height="20" alt="" />
                <input type="text" placeholder="输入用户密码" />
            </div>
            <div class="logC">
                <a><button @click="login">登 录</button></a>
            </div>
            <div class="register">
                <a @click="register">点此注册</a>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name:'Login',
        methods: {
            login() {
　　　　　　　　　　// 假设登陆成功，则跳转到 index 组件
                this.$router.replace('/Home');
            },
            register(){
                this.$router.replace('/Register');
            }
        }
    }
</script>

<style scoped lang="scss">
    * {
        margin: 0;
        padding: 0;
    }

    #wrap {
        height: 700px;
        width: 100%;
        background: url('~@/assets/background.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        position: relative;
    }
    #wrap .logGet {
        height: 408px;
        width: 368px;
        position: absolute;
        background-color: rgba(255,255,255,0.85);
        top: 100px;
        right: 15%;
    }

    .logC a button {
        width: 100%;
        height: 45px;
        background-color: #35495e;
        border: none;
        color: white;
        font-size: 18px;
    }

    .logGet .logD.logDtip .p1 {
        display: inline-block;
        font-size: 28px;
        margin-top: 30px;
        width: 86%;
        color:#35495e;
    }

    #wrap .logGet .logD.logDtip {
        width: 86%;
        border-bottom: 1px solid #35495e;
        margin-bottom: 60px;
        margin-top: 0px;
        margin-right: auto;
        margin-left: auto;
    }

    .logGet .lgD img {
        position: absolute;
        top: 12px;
        left: 8px;
    }

    .logGet .lgD input {
        width: 100%;
        height: 42px;
        text-indent: 2.5rem;
        background-color: transparent;
    }

    #wrap .logGet .lgD {
        width: 86%;
        position: relative;
        margin-bottom: 30px;
        margin-top: 30px;
        margin-right: auto;
        margin-left: auto;
    }

    #wrap .logGet .logC {
        width: 86%;
        margin-top: 0px;
        margin-right: auto;
        margin-bottom: 0px;
        margin-left: auto;
    }

    .register{
        position: absolute;
        right:23px;
        margin-top: 20px;
        font-size: 14px;
        color:#35495e;
    }
    .register:hover{
        cursor: pointer;
        color:#267b85;
    }

    // .title {
    //     font-family: "宋体";
    //     color: #FFFFFF;
    //     position: absolute;
    //     top: 50%;
    //     left: 50%;
    //     transform: translate(-50%, -50%);
    //     /* 使用css3的transform来实现 */
    //     font-size: 36px;
    //     height: 40px;
    //     width: 30%;
    // }

    // .copyright {
    //     font-family: "宋体";
    //     color: #FFFFFF;
    //     position: absolute;
    //     top: 50%;
    //     left: 50%;
    //     transform: translate(-50%, -50%);
    //     /* 使用css3的transform来实现 */
    //     height: 60px;
    //     width: 40%;
    //     text-align: center;
    // }
</style>
