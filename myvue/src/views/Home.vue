<template>
<div class="home">
    <div class="topbgc"></div>
    <Top-bar></Top-bar>
    <router-view name="center"></router-view>
    <router-view name="bottom"></router-view>
      
</div>  
</template>


<script>
import TopBar from '@/components/TopBar';

export default{
    name:'Home',
    data(){
        return{
            
        }
    },
    
    components:{
        TopBar,
        
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
