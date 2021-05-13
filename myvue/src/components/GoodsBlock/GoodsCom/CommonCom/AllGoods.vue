<template>
    <div class="allgoods">
        <div class="block1">
            <div class="titlebar">精选</div>
            <div class="pic1">
                <img :src="goods[0] && goods[0].productImageBig" alt="" />
                <div  class="worddiv">
                    <p class="name">{{ goods[0] && goods[0].productName }}</p>
                    <p class="title">{{ goods[0] && goods[0].subTitle }}</p>
                    <p>
                        <span class="price">￥{{ goods[0] && goods[0].salePrice }}</span>
                        <button @click="addGoods(goods[0])">加入购物车</button>
                    </p> 
                </div>
            </div>

            <div class="pic2">
                <img :src="goods[0] && goods[1].productImageBig" alt="" />
                <div class="worddiv">
                    <p class="name">{{ goods[0] && goods[1].productName }}</p>
                    <p class="title">{{ goods[0] && goods[1].subTitle }}</p>
                    <p>
                         <span class="price">￥{{ goods[0] && goods[1].salePrice }}</span>
                         <button @click="addGoods(goods[1])">加入购物车</button>
                    </p>
                   
                </div>
            </div>
        </div>
        
        <div class="block2">
            <p class="block2Title">全部商品</p>
            <ul>
                <li v-for="(item, index) in goods" :key="index">
                    <img :src="item && item.productImageBig" alt="" />
                    <div>
                        <p class="name">
                            <span>{{ item && item.productName }}</span>
                        </p>
                        <p class="title">
                            <span>{{ item && item.subTitle }}</span>
                        </p>
                        <p>
                            <span class="price">￥{{ item && item.salePrice }}</span>
                            <button @click="addGoods(item)">加入购物车</button>
                        </p>
                        
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'Goods',
    props: ["num"],
    data() {
        return {
            isShow: -1,
            goods: [],
            routeStr: [
                "/Phone",
                "/Television",
                "/Computer",
                "/Hardware",
                "/Netdevice",
            ],
        };
    },
    methods: {
        addGoods(item) {
            this.$store.commit("addList", item);
        },
    },

    created() {
        try {
            this.$http.get(this.routeStr[this.num - 1]).then((res) => {
                this.goods = res.data.result.data || [];
            });
        } catch (error) {
            console.log(error.message);
        }
    },
};
</script>

<style scoped lang="scss">
.block1 {
    width:95%;
    margin:auto;
    height: 900px;
    border-radius: 0px 0px 5px 5px;
    box-shadow: 2px 2px 5px #9adafd, -2px 0px 5px #9adafd;
    .titlebar {
        height: 50px;
        z-index: 6;
        background: -webkit-linear-gradient(#cbecfe, #9adafd);
        font-size: 25px;
        color: #a0a0a0;
        line-height: 50px;
    }
    .pic1 {
        float: left;
    }
    .pic2 {
        float: right;
    }
    .pic1,
    .pic2 {
        width: 49%;
        overflow: hidden;
        img {
            display: block;
            margin: auto;
            width: 95%;
            text-align: center;
            width: 605px;
            height: 605px;
        }
        
        .worddiv {
            width:100%;
            height:370px;
            margin-top:-50px;
            
            .name {
                font-size: 25px;
                text-align: center;
                font-weight: 500;
                color: black;
            }
            .title {
                font-size: 25px;
                text-align: center;
                color: #b0b0b0;
            }
            .price {
                color: #4169e1;
                font-size: 30px;
                font-weight: 600;
                text-align: center;
                margin-left:150px;
            }
            button {
                width: 200px;
                height: 50px;
                border: 1px #76bdfb solid;
                box-shadow: 1px 1px 5px #9adafd, -1px -1px 5px #9adafd;
                background-color: #76bdfb;
                color: #fff;
                font-size: 20px;
                margin-left:80px;
            }
            button:active {
                width: 200px;
                height: 50px;
                border: 1px #76bdfb solid;
                box-shadow: 1px 1px 5px #9adafd, -1px -1px 5px #9adafd;
                background-color: #76bdfb;
                color: #fff;
                font-size: 20px;
                margin-left:80px;
                opacity:0.5;
            }
        }
    }
}
.block2 {
    width:95%;
    margin:100px auto 0px auto;
    
    // margin-top: 100px;
    .block2Title{
        
        font-size: 25px;
        color: #a0a0a0;
        border-bottom:3px solid  #76bdfb;  
    }
    ul,
    li {
        padding: 0;
        margin: 0;
        list-style: none;
    }
    ul {
        // background-color: green;
        height: 1400px;
        width: 100%;
        

        li {
            width: 25%;
            height: 480px;
            float: left;
            div{
                margin-top:-40px;
            }
            img {
                // width: 98%;
                text-align: center;
                width: 318.5px;
                height: 318.5px;
            }
            .name {
                text-align: center;
                font-weight: 500;
                color: black;
            }
            .title {
                text-align: center;
                color: #b0b0b0;
            }
            .price {
                color: #4169e1;
                font-size: 20px;
                font-weight: 600;
                text-align: center;
                margin-left:50px;
            }
            button {
                width: 120px;
                height: 35px;
                border: 1px #76bdfb solid;
                box-shadow: 1px 1px 5px #9adafd, -1px -1px 5px #9adafd;
                background-color: #76bdfb;
                color: #fff;
                font-size: 16px;
                margin-left:50px;  
            }
            button:active{
                width: 120px;
                height: 35px;
                border: 1px #76bdfb solid;
                box-shadow: 1px 1px 5px #9adafd, -1px -1px 5px #9adafd;
                background-color: #76bdfb;
                color: #fff;
                font-size: 16px;
                margin-left:50px;  
                opacity:0.5;
            }    
        }
        li:hover {
            box-shadow: 5px 5px 10px #9adafd, -5px -5px 10px #9adafd;
            transform: translateY(-5px);
            transition: transform 0.5s;
        }
    }
}
</style>