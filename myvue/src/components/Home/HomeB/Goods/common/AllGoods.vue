<template>
  <div class="allgoods">
      <div class="block1">
            <div class="titlebar">精选</div>
            <div class="pic1">
                <img :src="goods[0] && goods[0].productImageBig" alt="" />
                <p class="price">￥{{ goods[0] && goods[0].salePrice }}</p>
                <p class="name">{{ goods[0] && goods[0].productName }}</p>
                <p class="title">{{ goods[0] && goods[0].subTitle }}</p>
            </div>
            <div class="pic2">
                <img :src="goods[0] && goods[1].productImageBig" alt="" />
                <p class="price">￥{{ goods[0] && goods[1].salePrice }}</p>
                <p class="name">{{ goods[0] && goods[1].productName }}</p>
                <p class="title">{{ goods[0] && goods[1].subTitle }}</p>
            </div>
        </div>
        <div class="block2">
            <ul>
                <li v-for="(item,index) in goods" :key=index>
                    <img :src="goods[0] && item.productImageBig" alt="" />
                    <p class="price">￥{{ goods[0] && item.salePrice }}</p>
                    <p class="name">{{ goods[0] && item.productName }}</p>
                    <p class="title">{{ goods[0] && item.subTitle }}</p>
                </li>
            </ul>
        </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
           
            goods:[],
            routeStr:["/Phone","/Television","/Computer","/Hardware","/Netdevice"],
        }
    },
    props:['num'],
    async created() {
        try {
            let res={};
            switch(this.num){
                case 1:
                     res = await this.$http.get(this.routeStr[0]);
                case 2:
                     res = await this.$http.get(this.routeStr[1]);
                    break;
                case 3:
                     res = await this.$http.get(this.routeStr[2]);
                    break;
                case 4:
                     res = await this.$http.get(this.routeStr[3]);
                    break;
                case 5:
                     res = await this.$http.get(this.routeStr[4]);
                    break;
            }
            let resData = res.data;
            this.goods = resData.result.data;
        } catch (error) {
            console.log(error.message);
        }
    },

}
</script>

<style scoped lang="scss">
    .block1 {
        height: 900px;
        border-radius: 0px 0px 5px 5px;
        box-shadow: 2px 2px 5px #9adafd, -2px 0px 5px #9adafd;
        .titlebar{
            height:50px;
            z-index: 6;
            background: -webkit-linear-gradient(#cbecfe,#9adafd);
            font-size:25px;
            color:#a0a0a0;
            line-height: 50px;

        }

        .pic1{
            float:left;
        }
        .pic1{
            float:right;
        }
        .pic1,.pic2{
            width: 49%;
            overflow:hidden;
            
            img {
                display: block;
                margin:auto;
                width: 95%;
                text-align: center;
                width:605px;
                height:605px;
            }
            img:hover {
                box-shadow: 5px 5px 10px #9adafd, -5px 0px 10px #9adafd;
                transform: translateY(-10px);
                transition: transform 0.5s;
            }
            .price {
                color: #4169e1;
                font-size: 30px;
                font-weight: 600;
                text-align: center;
            }
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
        }
        
    }
    .block2 {
        margin-top:100px;
        border-top: 3px solid #77befc;
        padding-top:15px;
        ul,li{
            padding:0;
            margin:0;
            list-style: none;
        }
        ul{
            // background-color: green;
            height:1000px;
            width:100%;
            
            li{
                width:25%;
                float:left;
                img {
                    // width: 98%;
                    text-align: center;
                    width:318.5px;
                    height:318.5px;
                }
                .price {
                    color: #4169e1;
                    font-size: 20px;
                    font-weight: 600;
                    text-align: center;
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
            }
            li:hover {
                    box-shadow: 5px 5px 10px #9adafd, -5px -5px 10px #9adafd;
                    transform: translateY(-5px);
                    transition: transform 0.5s;
                }

        }
        
    }
</style>