<template>
<div class="home">
    <Top-bar></Top-bar>
    <Nav-bar></Nav-bar>
    
</div>  
</template>


<script>
import TopBar from '@/components/Home/TopBar';
import NavBar from '@/components/Home/NavBar';

export default{
    name:'Home',

    components:{
        TopBar,
        NavBar
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
