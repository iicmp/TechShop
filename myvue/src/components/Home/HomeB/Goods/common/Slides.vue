<template>
    <div class="container">
        <ul :style='containerStyle'>
            <!-- <li >
                <img :src="slides[4]" alt="" />
            </li> -->
            <li v-for="(item, index) in slides" :key="index">
                <img :src="item" alt="" />
            </li>
            <!-- <li >
                <img :src="slides[1]" alt="" />
            </li> -->
        </ul>
        <span class="iconfont icon-left-line" @click="move(1300, +1)"></span>
        <span class="iconfont icon-right-line" @click="move(1300, -1)"></span>
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
            currentIndex: 1,
            distance: 0,
            // isLast:false,
        };
    },
    
    computed: {
        // isLastt(){
        //     return
        //         this.isLast
        // },
        containerStyle() {
            return {
                transform: `translate3d(${this.distance}px, 0, 0)`,
                // transition:`transform 2s ease`,
            };
        },
        // containerStyleLast() {
        //     return {
        //         transform: `translate3d(${this.distance}px, 0, 0)`,
        //         transition:`transform 0.01s ease`,
        //     };
        // },
    },
    methods: {
       move(offset, direction) {
            this.distance += offset * direction;
            // this.isLast=false;
            if (this.distance < -5200) {
                // this.isLast=true;
                this.distance = 0;
                // this.isLast=false;
                
            }
            if (this.distance > 0) {
                // this.isLast=true;
                this.distance = -5200;
                // this.isLast=true;

                
            }
            
        },
    },
    mounted(){
        var that=this;
        setInterval(function(){
            that.move(1300,-1);
        },3000);
       

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
}
</style>