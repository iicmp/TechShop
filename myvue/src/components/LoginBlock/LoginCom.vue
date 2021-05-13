<template>
    <div class="LoginCom">
        <input
            class="userbox"
            type="text"
            placeholder="用户名：数字、字母、下划线"
            required
            @keyup="userValidate($event)"
            v-model="userInput"
        />
        <p class="usertip"></p>
        <input
            class="passwordbox"
            type="text"
            placeholder="密码：数字、字母、下划线"
            required
            @keyup="passwordValidate($event)"
            v-model="passwordInput"
        />
        <p class="passwordtip"></p>
        <input class="submit" type="submit" value="登陆" @click="send($event)" />
        <p class="submittip"></p>
    </div>
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
                this.$http.post('/login', {
                    userName:this.userInput,
                    password:this.passwordInput
                })
                .then((response)=> {
                    if(response.data==true){
                        // this.$cookie.delete('test');
                        // this.$cookie.get('test');
                        this.$cookie.set('username', this.userInput, 1);
                        this.$cookie.set('password', this.passwordInput, 1);
                        this.$store.commit("setUser",this.userInput);
                        this.$store.commit("toggleLogin");
                        this.$router.push({
                            path:'/Home/GoodsBlock'
                        })                        
                    }else{
                        alert("账号或密码不正确，请重新输入");
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
.LoginCom {
    width: 400px;
    height: 250px;
    margin: auto;
    margin-top: 70px;
    border-radius: 10px;
    box-shadow: 2px 2px 6px rgba(56, 33, 33, 0.12),
        -2px -2px 6px rgba(56, 33, 33, 0.12);
    position: relative;
}
.userbox {
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
    top: 204px;

    color: red;
    font-size: 11px;
  
}
.passwordbox {
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
.submit {
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
    top: 170px;
}
.submit:active{
    opacity:0.5;
}

input:focus {
    outline: none;
}
</style>