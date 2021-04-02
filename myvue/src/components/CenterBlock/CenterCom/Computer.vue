<template>
    <div class="computer">
        <Slides :index="3"></Slides>
        <Goods :num="3"></Goods>
       
    </div>
</template>

<script> 
import Slides from "@/components/CenterBlock/CenterCom/CommonCom/Slides.vue";
import Goods from "@/components/CenterBlock/CenterCom/CommonCom/Goods.vue";
export default {
    name: "Computer",
    components: {
        Slides,
        Goods
    },   
};
</script>

<style scoped lang="scss">

</style>