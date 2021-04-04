<template>
    <div class="computer">
        <Slides :index="3"></Slides>
        <All-goods :num="3"></All-goods>
       
    </div>
</template>

<script> 
import Slides from "@/components/GoodsBlock/GoodsCom/CommonCom/Slides.vue";
import AllGoods from "@/components/GoodsBlock/GoodsCom/CommonCom/AllGoods.vue";
export default {
    name: "Computer",
    components: {
        Slides,
        AllGoods
    },   
};
</script>

<style scoped lang="scss">

</style>