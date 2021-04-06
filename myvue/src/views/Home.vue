<template>
<div class="home">
    <div id="test">
        
    </div>
    <Top-bar></Top-bar>
    <router-view name="center"></router-view>
    <!-- <router-view name="bottom"></router-view> -->
      
</div>  
</template>


<script>
import TopBar from '@/components/TopBar';

export default{
    name:'Home',
    components:{
        TopBar,
        
    }
}

</script>


<style scoped lang="scss">

</style>
