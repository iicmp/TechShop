<template>
    <div class="hardware">
        
        <Slides :index="4"></Slides>
        <Goods :num="4"></Goods>
       
    </div>
</template>

<script> 
import Slides from "@/components/CenterBlock/CenterCom/CommonCom/Slides.vue";
import Goods from "@/components/CenterBlock/CenterCom/CommonCom/Goods.vue";
export default {
    name: "HardWare",
    components: {
        Slides,
        Goods
    },   
};
</script>

<style lang="scss">

</style>