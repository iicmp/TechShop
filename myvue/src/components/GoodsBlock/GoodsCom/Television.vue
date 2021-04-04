<template>
    <div class="Television">
        <Slides :index="2"></Slides>
        <All-goods :num="2"></All-goods>
       
    </div>
</template>

<script> 
import Slides from "@/components/GoodsBlock/GoodsCom/CommonCom/Slides.vue";
import AllGoods from "@/components/GoodsBlock/GoodsCom/CommonCom/AllGoods.vue";
export default {
    name: "Televisiono",
    components: {
        Slides,
        AllGoods
    },   
};
</script>

<style scoped lang="scss">

</style>