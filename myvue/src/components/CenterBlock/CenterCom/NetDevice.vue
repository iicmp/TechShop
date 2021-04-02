<template>
    <div class="netdevice">
        <Slides :index="5"></Slides>
        <Goods :num="5"></Goods>
       
    </div>
</template>

<script> 
import Slides from "@/components/CenterBlock/CenterCom/CommonCom/Slides.vue";
import Goods from "@/components/CenterBlock/CenterCom/CommonCom/Goods.vue";
export default {
    name: "NetDevice",
    components: {
        Slides,
        Goods
    },   
};
</script>

<style scoped lang="scss">

</style>