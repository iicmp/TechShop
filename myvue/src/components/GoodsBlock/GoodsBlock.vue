<template>
    <div class="GoodsBlock">
        <div class="nav">
            <a @click="goTop">TechShop</a>
            <router-link class="phone" to="/Home/GoodsBlock/Phone"
                >手机</router-link
            >
            <router-link class="television" to="/Home/GoodsBlock/Television"
                >电视</router-link
            >
            <router-link class="computer" to="/Home/GoodsBlock/Computer"
                >电脑</router-link
            >
            <router-link class="hardware" to="/Home/GoodsBlock/HardWare"
                >智能硬件</router-link
            >
            <router-link class="netdevice" to="/Home/GoodsBlock/NetDevice"
                >网络设备</router-link
            >
            <input type="text" class="search-text" placeholder="搜索" />
            <button class="search-button">
                <span></span>
            </button>
        </div>
        <router-view />
    </div>
</template>

<script>
export default {
    name: "GoodsBlock",
    methods: {
        fixNav() {
            var scrollY = document.documentElement.scrollTop;
            if (scrollY > 0) {
                let nav = document.querySelector(".nav");
                nav.style.position = "fixed";
                nav.style.top = "40px";
                nav.style.backgroundColor = "#fff";
                nav.style.zIndex = 3;

                let searchText = document.querySelector(".search-text");
                let searchBtn = document.querySelector(".search-button");
                
            } else {
                let nav = document.querySelector(".nav");
                nav.style.position = "static";
                nav.style.backgroundColor = "#fff";

                
            }
        },
        goTop(){
            document.getElementById('test').scrollIntoView();
        }
    },
    mounted() {
        addEventListener("scroll", this.fixNav, true);
    },
};
</script>

<style scoped lang="scss">
.GoodsBlock {
    width: 1400px;
    margin: auto;
    

    .nav {
        
        height: 70px;
        
        // background-color: red;
        a {
            line-height: 70px;
            color: #242933;
        }
        a:hover {
            color: #76bdfb;
            cursor: pointer;
        }
        a:first-child {
            margin-right: 150px;
            font-size: 35px;
        }
        a:not(:first-child) {
            font-size: 18px;
            text-decoration: none;
            display: inline-block;
            margin-right: 80px;
        }
        .router-link-active {
            color: #76bdfb;
        }
        .search-text {
            margin-left: 150px;
            width: 200px;
            height: 43px;
            border-radius: 3px 0 0 3px;
            border: 1px #242933 solid;
            padding: 0;
            vertical-align: middle;
        }
        .search-button {
            padding: 0;
            border: 0;
            width: 45px;
            height: 45px;
            margin-left: -1px;
            border-radius: 0 3px 3px 0;
            border: 1px #242933 solid;
            background-color: #242933;
            color: #fff;
            vertical-align: middle;
            background-image: url("~@/assets/search.png");
            background-size: 30px 30px;
            background-position: center;
            background-repeat: no-repeat;
        }
    }
}
</style>