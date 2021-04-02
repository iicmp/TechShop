<template>
<div class="home">
    <div class="topbgc">

    </div>
    <Top-bar></Top-bar>
    <Center-block ></Center-block>
    <Bottom-bar></Bottom-bar>

    
</div>  
</template>


<script>
import TopBar from '@/components/TopBar';
import CenterBlock from '@/components/CenterBlock/CenterBlock.vue';
import BottomBar from '@/components/BottomBar'

export default{
    name:'Home',

    components:{
        TopBar,
        CenterBlock,
        BottomBar
       
    }
}

</script>


<style scoped lang="scss">

.topbgc{
    width:1920px;
    height:40px;
    position:absolute;
    top:0px;
    background-color: #242933;
    z-index: -1;
}
</style>
