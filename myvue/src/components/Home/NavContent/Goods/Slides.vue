<template>
  <div class="container">
      
      <ul :style="containerStyle">
          <!-- <li><img :src="img1" alt=""></li> -->
          <li v-for="(item,index) in slides" :key="index">
              <img :src="item" alt="">
          </li>
          <!-- <li><img :src="img4" alt=""></li> -->
      </ul>
      
          <span class="iconfont icon-left-line" @click="move(1100,+1)"></span>
          <span class="iconfont icon-right-line" @click="move(1100,-1)"></span>

  </div>
</template>


<script>

let img1 = require('@/assets/slides/s1.png')
let img2 = require('@/assets/slides/s2.png')
let img3 = require('@/assets/slides/s3.png')
let img4 = require('@/assets/slides/s4.png')

export default {
    name:'Slides',
    data(){
        return{
             slides:[img1,img2,img3,img4],
             currentIndex:1,
             distance:0
        }
    },
    computed:{
        containerStyle(){
            return{
                transform:`translate3d(${this.distance}px, 0, 0)`
            }
            
        }
    },
    methods:{
        move(offset, direction) {
                this.distance += offset * direction
                if (this.distance <-3300) this.distance = 0
                if (this.distance > 0) this.distance = -3300
                console.log(this.distance);
            }

    }
}
</script>

<style scoped lang="scss">
.container,ul,li{
    padding:0;
}
ul,li{
    list-style: none;
}
.container{
    
    margin:15px auto;
    width:1100px;
    overflow: hidden;
    position: relative;
    ul{
        width:4400px;
        height:427px;
        li{
            float:left;
            img{
                width:1100px;
            }
        } 
    } 
    span{
        position:absolute;
        top:200px;
    }
    span:hover{
        background-color: rgba(255,255,255,0.3);
    }
    .icon-right-line{
        right:0;
    }
    .icon-left-line{
        left:0;
    }
    
}

</style>