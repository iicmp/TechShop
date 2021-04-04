<template>
    <div class="hardware">
        
        <Slides :index="4"></Slides>
        <All-goods :num="4"></All-goods>
       
    </div>
</template>

<script> 
import Slides from "@/components/GoodsBlock/GoodsCom/CommonCom/Slides.vue";
import AllGoods from "@/components/GoodsBlock/GoodsCom/CommonCom/AllGoods.vue";
export default {
    name: "HardWare",
    components: {
        Slides,
        AllGoods
    },   
};
</script>

<style lang="scss">

</style>