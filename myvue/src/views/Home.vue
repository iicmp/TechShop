<template>
<div class="home">
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
// export default {
//     name: 'home',

//     data(){
//         return{
//             banner:[],
            
//         }
//     },

//     async created(){
//         try {
//             const res=await this.$http.get('/');
//             let homeData=res.data;
//             this.banner=homeData.result.data;
            
//         } catch (error) {
//             console.log(error.message)
//         }
//     }
 
// }
</script>


<style scoped lang="scss">

</style>
