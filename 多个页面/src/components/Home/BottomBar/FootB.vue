<template>
    <div class="foot">
        <div class="hline"></div>
        <div class="footContainer">
            <div class="top">
                <div class="nav">
                    <a href="#" >预约维修服务</a>
                    
                    <a href="#" >7天无理由退款</a>
                    
                    <a href="#" >15天免费退换</a>
                    
                    <a href="#" >满99包邮</a>
                    
                    <a href="#" >520余家售后站点</a>
                </div>
            </div>
            <div class="bottom">
                <ul class="first-col">
                    <li class="first-row">帮助中心</li>
                    <li>账户管理</li>
                    <li>购物指南</li>
                    <li>订单操作</li>
                    <li>F码通道</li>
                </ul>
                <ul class="second-col">
                    <li class="first-row">服务支持</li>
                    <li>售后政策</li>
                    <li>自助服务</li>
                    <li>相关下载</li>
                    <li>礼物码</li>
                </ul>
                <ul class="third-col">
                    <li class="first-row">线下门店</li>
                    <li>小米之家</li>
                    <li>服务网点</li>
                    <li>授权体验店</li>
                    <li>防伪查询</li>
                </ul>
                <ul class="fourth-col">
                    <li class="first-row">关于小米</li>
                    <li>了解小米</li>
                    <li>加入小米</li>
                    <li>社会责任</li>
                    <li>投资关系</li>
                </ul>
                <!-- <span class="vline"></span> -->
                <ul class="seventh">
                    <li class="number">400-100-5678</li>
                    <li class="time">8:00-18:00（仅收市话费）</li>
                    <li class="service">
                        <span>人工客服</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BottomBar",
};
</script>

<style scoped lang="scss">
.foot {
    position: absolute;
    top: 3200px;
    
    width: 100%;
    background-color: #fff;
    .hline {
        width:100%;
        height: 0.5px;
        position:absolute;
        top:40px;
        background-color: #76bdfb;
    }
    .footContainer {
        margin: auto;
        width: 1300px;
        overflow: hidden;
        .top {
            .nav{
                // background-color: red;
                display: flex;
                justify-content: space-between;
                a {
                    text-decoration: none;
                    font-size: 17px;
                    color: grey;
                    display:inline-block;
                    width:200px; 
                    text-align: center;
                }
                a:hover{
                    cursor:pointer;
                    color:#76bdfb;
                }
            }
            
        }
        .bottom {
            display:flex;
            justify-content: space-between;
            height: 180px;
            ul {
                display: inline-block;
                width: 200px;
                list-style: none;
                padding:0px;
            }
            li {
                text-align: center;
                color: grey;
                font-size: 10px;
                list-style: none;
            }
            li:hover{
                cursor: pointer;
                color:#76bdfb;
            }
            .first-row {
                // margin-top: 20px;
                // margin-bottom: 20px;
                margin:20px auto;
                font-size:17px;
                // color: black;
            }
            .vline {
                display: inline-block;
                width: 1px;
                height: 100px;
                background-color: #cccccc;
            }
            .seventh {
                .number {
                    font-size: 20px;
                    color: #76bdfb;
                    margin-top:40px;
                }
                .time {
                    font-size: 8px;
                    color: black;
                    margin-top:20px;
                }
                .service {
                    color: #76bdfb;
                    font-size: 12px;
                    margin-top: 5px;
                    .service span {
                        border: 1px solid #76bdfb;
                        padding: 5px;
                    }
                }
            }
        }
    }
}
</style>