<template>
    <div class="netdevice">
        <Slides></Slides>
        <all-goods :num="5"></all-goods>
       
    </div>
</template>

<script> 
import Slides from "./common/Slides.vue";
import AllGoods from './common/AllGoods.vue';
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