<template>
    <div class="container">
        <ul :style='containerStyle'>
            <li v-for="(item, index) in slides" :key="index">
                <img :src="item" alt="" />
            </li>
        </ul>
        <span class="iconfont icon-left-line" @click="move(1300, +1)"></span>
        <span class="iconfont icon-right-line" @click="move(1300, -1)"></span>
        <div class="dots">
            <a href="javscript:;" @click="shift(0)" :class="{'dotClass':currentDistance==0}"></a>
            <a href="javscript:;" @click="shift(-1300)" :class="{'dotClass':currentDistance==-1300}"></a>
            <a href="javscript:;" @click="shift(-2600)" :class="{'dotClass':currentDistance==-2600}"></a>
            <a href="javscript:;" @click="shift(-3900)" :class="{'dotClass':currentDistance==-3900}"></a>
            <a href="javscript:;" @click="shift(-5200)" :class="{'dotClass':currentDistance==-5200}"></a>
        </div>
        

    </div>
</template>

<script>
let img1 = require("@/assets/slides/s1.png");
let img2 = require("@/assets/slides/s2.png");
let img3 = require("@/assets/slides/s3.png");
let img4 = require("@/assets/slides/s4.png"); 
let img5 = require("@/assets/slides/s5.png"); 
export default {
    name: "Slides",
    props:['index'],
    data() {
        return {
            slides: [img1, img2, img3, img4, img5],
            distance: (this.index-1)*(-1300),  
        };
    },
    
    computed: {
        containerStyle() {
            return {
                transform: `translate3d(${this.distance}px, 0, 0)`,    
            };
        },
        currentDistance(){
            return this.distance       
        }
    },
    methods: {
       move(offset, direction) {
            this.distance += offset * direction;
            if (this.distance < -5200) {
                this.distance = 0;     
            }
            if (this.distance > 0) {
                this.distance = -5200;    
            }    
        },
        shift(dstan){
            this.distance=dstan;
        }
    },
    mounted(){
        var that=this;
        setInterval(function(){
            that.move(1300,-1);
            
        },2000);

       

    }
};
</script>

<style scoped lang="scss">
.container,
ul,
li {
    padding: 0;
}
ul,
li {
    list-style: none;
}
.container {
    margin: 15px auto;
    width: 1300px;
    overflow: hidden;
    position: relative;
    ul {
        width: 6500px;
        height: 505px;
        li {
            float: left;
            img {
                width: 1300px;
            }
        }
    }
    span {
        position: absolute;
        top: 200px;
    }
    span:hover {
        background-color: rgba(255, 255, 255, 0.5);
    }
    .icon-right-line {
        right: 0;
    }
    .icon-left-line {
        left: 0;
    }
    .dots{
        position:absolute;
        top:480px;
        left:550px;
    }
    .dotClass{
        background-color: #9ddefe;
    }
    a{
        display:inline-block;
        width:15px;
        height:15px;
        border-radius:7.5px;
        background-color: rgba(255, 255, 255, 0.5);
        margin-left:10px;
    }
    a:hover{
        background-color: #9ddefe;
    }
}
</style>