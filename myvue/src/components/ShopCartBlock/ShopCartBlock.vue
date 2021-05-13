<template>
    <div class="ShopCartBlock">
        <h1>购物车</h1>
        <ul>
            <li v-for="(item,index) in goodsList" :key="index">
                <table>
                    <tr>
                        <td style="width:100px">
                            <input class="selectbox checkbox" @click="checkedToggle($event,index)" type="checkbox">
                        </td>
                        <td style="width:200px">
                            <img :src="item.productImageBig" alt="">
                        </td>
                        <td style="width:600px">
                            <h3>{{item.productName}}</h3>
                            <p>{{item.subTitle}}</p>
                        </td>
                        <td style="width:150px">
                            <span class="addbox" @click="addCount(index)">+</span>
                            <span class="count">{{goodsNum[index]}}</span>
                            <span class="subbox" @click="subCount(index)">-</span>
                        </td>
                        <td style="width:150px">
                            <span class="saleprice">￥{{item.salePrice*goodsNum[index]}}</span>
                        </td>
                    </tr>
                </table>
            </li>
        </ul>
        <div class="paybar">
            <table style="border-top:3px solid #77befc">
                <tr >
                    <td style="width:100px">
                        <input type="checkbox" class="selectbox" @click="selectAll($event)">
                        <span style="font-size:25px">全选</span>
                    </td>
                    <td style="width:1050px;text-align:right;">
                        <span>总金额：</span>
                        <span style="color:#77befc">{{totalPrice}}</span>
                    </td>
                    <td style="width:150px;text-align:center;"><span class="paybox">付款</span></td>
                </tr>
            </table>
            
            
            
        </div>  
    </div>
</template>

<script>
export default {
    name: "ShopCart",
    data(){
          return{
            checkList:[]
          } 
    },
    computed: {
        goodsList() {
            return this.$store.state.list;
        },
        goodsNum() {
            return this.$store.state.num;
        },
        totalPrice(){
            var sum=0;
            for(let i=0;i<this.goodsList.length;i++){
                if(this.checkList[i]){
                    sum+=this.goodsList[i].salePrice*this.goodsNum[i];
                }
            }
            return sum;
        },
    },
    methods:{
        addCount(index){
            this.$store.commit("addNum",index)
        },
        subCount(index){
            this.$store.commit("subNum",index)
        },
        
        checkedToggle(checkObj,index){
            this.checkList[index]=checkObj.target.checked;
        },
        selectAll(obj){
            let checkboxList=document.querySelectorAll(".checkbox");
            if(obj.target.checked){
                for(let i=0;i<checkboxList.length;i++){
                    checkboxList[i].checked=true;
                    this.checkList[i]=checkboxList[i].checked;
                }
            }else{
                for(let i=0;i<checkboxList.length;i++){
                    checkboxList[i].checked=false;
                    this.checkList[i]=checkboxList[i].checked;
                }
            }
        }
            
            
            
           
            
       
    },
    
};
</script>

<style scoped lang="scss">
table{ 
    border-collapse: collapse; 
    padding: 0;
}
td{
    padding:0;
}

.ShopCartBlock{
    width:1300px;
    margin:auto;
}
li{
    list-style: none;
    display:block;
    border-bottom:1px solid #77befc;
}

.selectbox{
    width:20px;
    height:20px;
}
img{
    width:150px;
    height:150px;
}
.addbox{
    display:inline-block;
    border-radius: 20px;
    width:15px;
    height:20px;
    background-color: #77befc;
    color:#fff;
    font-size:20px;
    line-height: 20px;
    padding-left:5px;
}
.addbox:hover{
    cursor: pointer;
}
.subbox{
    display:inline-block;
    border-radius: 20px;
    width:12px;
    height:10px;
    background-color: #77befc;
    color:#fff;
    font-size:20px;
    line-height: 20px;
    padding-left:8px;
    padding-bottom:10px;
}
.subbox:hover{
    cursor: pointer;
}
.count{
    display:inline-block;
    margin:auto 10px;
}
.saleprice{
    color:#77befc;
    font-size:30px;
}

.paybar{
    position:fixed;
    bottom:0px;
    height:50px;
    background-color: #fff;
    
}
.paybox{
    display:inline-block;
    width:150px;
    height:50px;
    background-color: #77befc;
    font-size:30px;
    color:#fff;
}


</style>