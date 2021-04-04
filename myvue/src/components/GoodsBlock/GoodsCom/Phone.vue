<template>
    <div class="phone">
        <Slides :index="1"></Slides>
        <All-goods :num="1"></All-goods>
       
    </div>
</template>

<script> 
import Slides from "@/components/GoodsBlock/GoodsCom/CommonCom/Slides.vue";
import AllGoods from "@/components/GoodsBlock/GoodsCom/CommonCom/AllGoods.vue";
export default {
    name: "Phone",
    components: {
        Slides,
        AllGoods
    },   
};
</script>

<style scoped lang="scss">

</style>