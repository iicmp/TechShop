<template>
    <div class="Television">
        <Slides :index="2"></Slides>
        <all-goods :num="2"></all-goods>
       
    </div>
</template>

<script> 
import Slides from "./common/Slides.vue";
import AllGoods from './common/AllGoods.vue';
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