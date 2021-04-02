<template>
    <div class="Television">
        <Slides :index="2"></Slides>
        <Goods :num="2"></Goods>
       
    </div>
</template>

<script> 
import Slides from "@/components/CenterBlock/CenterCom/CommonCom/Slides.vue";
import Goods from "@/components/CenterBlock/CenterCom/CommonCom/Goods.vue";
export default {
    name: "Televisiono",
    components: {
        Slides,
        Goods
    },   
};
</script>

<style scoped lang="scss">

</style>