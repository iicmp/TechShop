<template>
    <div class="phone">
        <Slides :index="1"></Slides>
        <Goods :num="1"></Goods>
       
    </div>
</template>

<script> 
import Slides from "@/components/CenterBlock/CenterCom/CommonCom/Slides.vue";
import Goods from "@/components/CenterBlock/CenterCom/CommonCom/Goods.vue";
export default {
    name: "Phone",
    components: {
        Slides,
        Goods
    },   
};
</script>

<style scoped lang="scss">

</style>