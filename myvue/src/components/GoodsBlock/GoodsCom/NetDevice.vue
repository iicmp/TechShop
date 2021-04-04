<template>
    <div class="netdevice">
        <Slides :index="5"></Slides>
        <All-goods :num="5"></All-goods>
       
    </div>
</template>

<script> 
import Slides from "@/components/GoodsBlock/GoodsCom/CommonCom/Slides.vue";
import AllGoods from "@/components/GoodsBlock/GoodsCom/CommonCom/AllGoods.vue";
export default {
    name: "NetDevice",
    components: {
        Slides,
        AllGoods
    },   
};
</script>

<style scoped lang="scss">

</style>