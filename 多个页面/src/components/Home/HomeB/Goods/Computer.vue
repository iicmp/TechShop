<template>
    <div class="computer">
        <Slides :index="3"></Slides>
        <all-goods :num="3"></all-goods>
       
    </div>
</template>

<script> 
import Slides from "./common/Slides.vue";
import AllGoods from './common/AllGoods.vue';
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