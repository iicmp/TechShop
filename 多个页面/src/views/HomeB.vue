<template>
<div class="home">
    <Top-bar></Top-bar>
    <Nav-content></Nav-content>
     <Bottom-bar></Bottom-bar>

    
</div>  
</template>


<script>
import TopBar from '@/components/Home/TopBar';
import NavContent from '@/components/Home/HomeB/NavContent.vue';
import BottomBar from '@/components/Home/BottomBar/FootB.vue'

export default{
    name:'Home',

    components:{
        TopBar,
        NavContent,
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
.home{
        // background-color: #dffdff;

}


</style>
