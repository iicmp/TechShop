<template>
    <form action="" class="RegisterCom">
        <input
            class="Ruserbox"
            type="text"
            placeholder="用户名：数字、字母、下划线"
            @keyup="userValidate($event)"
            v-model="userInput"
        />
        <p class="usertip"></p>
        <input
            class="Rpasswordbox"
            type="text"
            placeholder="密码：数字、字母、下划线"
            @keyup="passwordValidate($event)"
            v-model="passwordInput"
        />
        <p class="passwordtip"></p>
        <input class="RTpasswordbox" type="text" placeholder="确认密码" />
        <button class="Rsubmit" @click="send($event)">注册</button>
        <p class="submittip"></p>
    </form>
</template>

<script>
export default {
    data(){
        return{
             userInput:'',
             passwordInput:'',
        }
    },
    computed:{
        userReady(){
            let reg1 = /^[0-9]/;
            let reg2 = /^[0-9a-zA-Z_]{1,10}$/;
            return reg2.test(this.userInput)&&!(reg1.test(this.userInput))
        },
        passwordReady(){
            let reg2 = /^[0-9a-zA-Z_]{1,10}$/;
            return reg2.test(this.passwordInput)
        }

    },
    methods: {
        userValidate: function (e) {
            let val = e.target.value;
            let reg1 = /^[0-9]/;
            let reg2 = /^[0-9a-zA-Z_]{1,10}$/;
            if (reg2.test(val) && !reg1.test(val)) {
                e.target.nextSibling.innerHTML = "";
            } else if (reg1.test(val)) {
                e.target.nextSibling.innerHTML = "不能以数字开头，请重新输入";
            } else if (!reg2.test(val) && val == "") {
                e.target.nextSibling.innerHTML = "";
            } else {
                e.target.nextSibling.innerHTML =
                    "密码由字母数字及下划线组成，请重新输入";
            }
        },
        passwordValidate: function (e) {
            let val = e.target.value;
            let reg2 = /^[0-9a-zA-Z_]{1,10}$/;
            if (reg2.test(val)||val == "") {
                e.target.nextSibling.innerHTML = "";
            }else {
                e.target.nextSibling.innerHTML =
                    "密码由字母数字及下划线组成，请重新输入";
            }
        },
        send:function(e){
            if(this.userReady&&this.passwordReady){
                e.target.nextSibling.innerHTML=" "
                this.$http.post('/register', {
                    userName:this.userInput,
                    password:this.passwordInput
                })
                .then((response)=> {
                    if(response.data==true){
                        // this.$cookie.delete('test');
                        // this.$cookie.get('test');
                        alert("注册成功")
                        this.$router.push({
                            path:'/Home/LoginBlock/LoginCom'
                        })                        
                    }
                   
                })
                .catch(function (error) {
                    console.log(error);
                });  
            }else{
                e.target.nextSibling.innerHTML="请按要求输入"
            }
        }
    },
};
</script>

<style scoped lang="scss">
.RegisterCom {
    width: 400px;
    height: 320px;
    margin: auto;
    margin-top: 70px;
    border-radius: 10px;
    box-shadow: 2px 2px 6px rgba(56, 33, 33, 0.12),
        -2px -2px 6px rgba(56, 33, 33, 0.12);
    position: relative;
}
.Ruserbox {
    width: 250px;
    height: 40px;
    border: 1px solid #cbecfe;
    background-image: url("~@/assets/profile.png");

    background-size: 35px 35px;
    background-repeat: no-repeat;
    padding-left: 35px;
    box-shadow: 1px 1px 4px rgba(56, 33, 33, 0.12),
        -1px -1px 4px rgba(56, 33, 33, 0.12);

    position: absolute;
    left: 70px;
    top: 30px;
}
.usertip {
    position: absolute;
    left: 100px;
    top: 64px;

    color: red;
    font-size: 11px;
}
.passwordtip {
    position: absolute;
    left: 100px;
    top: 134px;

    color: red;
    font-size: 11px;
}
.submittip {
    position: absolute;
    left:-webkit-calc(50% - 30px);
    left:-moz-calc(50% - 30px); 
    left:calc(50% - 30px); 
    top: 270px;

    color: red;
    font-size: 11px;
  
}
.Rpasswordbox {
    width: 250px;
    height: 40px;
    border: 1px solid #cbecfe;
    background-image: url("~@/assets/password.png");
    background-size: 35px 35px;
    background-repeat: no-repeat;
    padding-left: 35px;
    box-shadow: 1px 1px 4px rgba(56, 33, 33, 0.12),
        -1px -1px 4px rgba(56, 33, 33, 0.12);

    position: absolute;
    left: 70px;
    top: 100px;
}
.RTpasswordbox {
    width: 250px;
    height: 40px;
    border: 1px solid #cbecfe;
    background-image: url("~@/assets/password.png");
    background-size: 35px 35px;
    background-repeat: no-repeat;
    padding-left: 35px;
    box-shadow: 1px 1px 4px rgba(56, 33, 33, 0.12),
        -1px -1px 4px rgba(56, 33, 33, 0.12);

    position: absolute;
    left: 70px;
    top: 170px;
}
.Rsubmit {
    width: 125px;
    height: 40px;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-size: 25px;
    background-color: #77befc;
    box-shadow: 1px 1px 2px rgba(119, 190, 252),
        -1px -1px 2px rgba(119, 190, 252);

    position: absolute;
    left: 132px;
    top: 240px;
}
.Rsubmit:active{
    opacity:0.5;
}

button:focus,
input:focus {
    outline: none;
}
</style>