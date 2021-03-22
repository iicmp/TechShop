<template>
    <div class="hardware">
        <Slides></Slides>
        <all-goods :num="4"></all-goods>
       
    </div>
</template>

<script> 
import Slides from "./common/Slides.vue";
import AllGoods from './common/AllGoods.vue';
export default {
    name: "HardWare",
    components: {
        Slides,
        AllGoods
    },   
};
</script>

<style scoped lang="scss">

</style>