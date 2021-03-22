<template>
    <div class="selected">
        <div id="navContainer">
            <div class="nav">
                <a ref="atag" @click="top">home</a>
                <a ref="atag" @click="phonePage">手机</a>
                <a ref="atag" @click="televisionPage">电视</a>
                <a ref="atag" @click="computerPage">电脑</a>
                <a ref="atag" @click="hardWarePage">智能硬件</a>
                <a ref="atag" @click="netDevicePage">网络设备</a>
            </div>
        </div>
        <img class="bgphone" src="~@/assets/homephone.jpg" alt="" />
        <div class="word">
            <p>智能手机</p>
            <p>轻妙，掌控全场</p>
            <p>纯净系统，无广告，0推送</p>
            <p>一亿像素，只要999</p>
        </div>
        <div class="selectedpic">
            <div class="lockpic">
                <img :src="goods[0] && goods[1].productImageBig" alt="" />
            </div>
            <div class="routerpic">
                <img :src="goods[0] && goods[2].productImageBig" alt="" />
            </div>
            <div class="phonepic">
                <img :src="goods[0] && goods[3].productImageBig" alt="" />
            </div>
            <div class="televisionpic">
                <img :src="goods[0] && goods[4].productImageBig" alt="" />
            </div>
            <div class="computerpic">
                <img :src="goods[0] && goods[0].productImageBig" alt="" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Selected",
    data() {
        return {
            goods: [],
        };
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
               
                // // var atag=document.getElementsByTagName("a");
                // var alist=this.$refs.atag;
                // console.log(alist);
                // alist[0].onmouseenter=function(){
                //         this.style.color="#76bdfb";
                // }
                // alist[0].onmouseleave=function(){
                //     this.style.color="#242933";
                // }
                // for(var i=1;i<atag.length;i++){
                //     alist[i].onmouseenter=function(){
                //         this.style.color="#76bdfb";
                //     }
                //     alist[i].onmouseleave=function(){
                //         this.style.color="black";
                //     }
                // }
            } else {
                document.getElementById("navContainer").style.position =
                    "absolute";
                document.getElementById("navContainer").style.top = "40px";
                document.getElementById("navContainer").style.backgroundColor =
                    "transparent";

                // var alist=this.$refs.atag;
                // alist[0].onmouseenter=function(){
                //         this.style.color="#242933";
                // }
                // alist[0].onmouseleave=function(){
                //     this.style.color="#242933";
                // }
                // for(var i=1;i<atag.length;i++){
                //     alist[i].onmouseenter=function(){
                //         this.style.color="black";
                //     }
                //     alist[i].onmouseleave=function(){
                //         this.style.color="black";
                //     }
                // }
            }
        },
    },

    mounted() {
        addEventListener("scroll", this.fixNav, true);
    },
    async created() {
        try {
            const res = await this.$http.get("/Selected");
            let homeData = res.data;
            this.goods = homeData.result.data;
        } catch (error) {
            console.log(error.message);
        }
    },
};
</script>

<style scoped lang="scss">
.selected {
    width: 100%;
    margin: auto;
    position: relative;
    #navContainer {
        width: 100%;
        height: 70px;
        position: absolute;
        top: 0px;
        z-index: 4;
        .nav {
            position: inherit;
            left: calc(50% - 600px);
            width: 1200px;
            // background-color: red;
            a {
                line-height: 70px;
            }
            a:hover {
                cursor: pointer;
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
        top: 0px;
        z-index: 2;
    }
    .word {
        position: absolute;
        top: 250px;
        left: calc(50% - 600px);
        z-index: 3;
    }
    .selectedpic {
        position: absolute;
        top: 800px;
        width: 1400px;
        left: calc(50% - 700px);

        div:not(:last-child) {
            width: 650px;
            height: 650px;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 5px 5px 10px #9adafd, -5px -5px 10px #9adafd;
            float: left;
            margin: 20px 20px;
            img {
                width: 650px;
                height: 650px;
            }
        }

        .computerpic {
            overflow: hidden;
            width: 1340px;
            height: 664px;
            border-radius: 20px;
            margin-left: 20px;
            box-shadow: 2px 2px 5px #9adafd, -2px -2px 5px #9adafd;
            img {
                width: 1340px;
                border-radius: 20px;
                transition: all 1.5s;
            }
            img:hover {
                transform: scale(1.2);
            }
        }
    }
}
</style>