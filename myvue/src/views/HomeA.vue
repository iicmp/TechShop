<template>
    <div id="homeA" @scroll="fixNav">
        <Top-bar></Top-bar>
        <div id="navContainer">
            <div class="nav">
                <a  @click="top">home</a>
                <a  @click="phonePage">手机</a>
                <a  @click="televisionPage">电视</a>
                <a  @click="computerPage">电脑</a>
                <a  @click="hardWarePage">智能硬件</a>
                <a  @click="netDevicePage">网络设备</a>
            </div>
        </div>
        <img class="bgphone" src="~@/assets/homephone.jpg" alt="" />
        <div class="word">

        </div>
        <div class="selected">
            <img class="computerpic" :src="goods[0]&&goods[0].productImageBig" alt="" />
            <img class="lockpic" :src="goods[0]&&goods[1].productImageBig" alt="" />
            <img class="routerpic" :src="goods[0]&&goods[2].productImageBig" alt="" />
            <img class="phonepic" :src="goods[0]&&goods[3].productImageBig" alt="" />
            <img class="televisionpic" :src="goods[0]&&goods[4].productImageBig" alt="" />
            
        </div>
        
    </div>
</template>

<script>
import TopBar from "@/components/Home/TopBar";
export default {
    name: "HomeA",
    data(){
        return{
            goods:[]
        }
    },
    methods: {
        top() {
            document.documentElement.scrollTop = 0;
        },
        phonePage() {
            this.$router.replace("/homeB/Phone");
        },
        televisionPage() {
            this.$router.replace("/homeB/Television");
        },
        computerPage() {
            this.$router.replace("/homeB/Computer");
        },
        hardWarePage() {
            this.$router.replace("/homeB/HardWare");
        },
        netDevicePage() {
            this.$router.replace("/homeB/NetDevice");
        },
        fixNav() {
            var scrollY = document.documentElement.scrollTop;
            if (scrollY > 40) {
                document.getElementById("navContainer").style.position =
                    "fixed";
                document.getElementById("navContainer").style.top = "0px";
                document.getElementById("navContainer").style.backgroundColor =
                    "#fff";
            } else {
                document.getElementById("navContainer").style.position =
                    "absolute";
                document.getElementById("navContainer").style.top = "40px";
                document.getElementById("navContainer").style.backgroundColor =
                    "transparent";
            }
        },
    },

    mounted() {
        addEventListener("scroll", this.fixNav, true);
    },
    async created(){
        try {
            const res=await this.$http.get('/Selected');
            let homeData=res.data;
            this.goods=homeData.result.data;   
        } catch (error) {
            console.log(error.message)
        }
    },

    components: {
        TopBar,
    },
};
</script>

<style scoped lang="scss">
#homeA {
    width: 100%;
    margin: auto;
    position: relative;
    #navContainer {
        width: 100%;
        height: 70px;
        position: absolute;
        top: 40px;
        z-index: 3; 
        .nav {
            position: inherit;
            left: calc(50% - 600px);
            width: 1200px;
            // background-color: red;
            a {
                line-height: 70px;
            }
            a:hover {
                color: #76bdfb;
                cursor:pointer;
            }
            a:first-child {
                margin-right: 200px;
                font-size: 35px;
                color: #242933;
            }
            a:not(:first-child) {
                font-size: 18px;
                text-decoration: none;
                color: black;
                display: inline-block;
                margin-right: 80px;
            }
        }
    }
    .bgphone {
        width: 100%;
        position: absolute;
        top: 40px;
        z-index: 2;
    }
    .word{
        position:absolute;
        
    }
    .selected{
        position:absolute;
        top:800px;
        background-color: pink;
        img{
            width:400px;
            border:1px solid #76bdfb;

        }
        .computerpic{
            

        }
        .lockpic{
            
        }
        .routerpic{
            
        }
        .phonepic{
            
        }
        .televisionpic{
            
        }
    }
   
}
</style>