<template>
  <div class="navbar">
      <div class="nav">
          <h1>navbarljf adjkldfjovjin</h1>
            <!-- <router-link class="selected" to="/"><img src="@/assets/home.png" alt=""></router-link> 
            <router-link class="phone" to="">手机</router-link>
            <router-link class="television" to="">电视</router-link>
            <router-link class="computer" to="">电脑</router-link>
            <router-link class="hardware" to="">智能硬件</router-link>
            <router-link class="netdevice" to="">网络设备</router-link>
            <input type="text" class="search-text">
            <input type="button" class="search-button " value=" ">   -->
      </div>
      <router-view/>

  </div>
</template>

<script>
export default {
    name:'NavBar'

}
</script>

<style scoped lang="scss">


// .navbar{
//     width:1226px;
//     margin:auto;
//     // background-color:red;
//     .nav{
//         height:100px;
//         img{
//             width:80px;
//             margin-top: 15px;
//         }
//         a:first-child{
//             margin-right:200px;
//         }
//         a:not(:first-child){
            
//             font-size: 20px;
//             text-decoration: none;
//             color: black;
//             display:inline-block;
//             margin-right:40px;
//         }
//         a:not(:first-child):hover{
//              color:#2c3e50;
//         }
//         a.router-link-active{
//             color:#2c3e50;
//             font-weight: bold;
//         }
//         .search-text{
//             margin-left:200px;
//             width:200px;
//             height:33px;
//             border-top-left-radius: 3px;
//             border-bottom-left-radius: 3px;
//             border-top-right-radius: 0px;
//             border-bottom-right-radius: 0px;
//             border:1px #2c3e50 solid;
//             padding:0;
//         }
//         .search-button{
//             margin-left: -1px;
//             width:35px;
//             height:35px;
//             // font-size:20px;
//             border-top-left-radius: 0px;
//             border-bottom-left-radius: 0px;
//             border-top-right-radius: 3px;
//             border-bottom-right-radius: 3px;
//             background-color: #2c3e50;
//             padding:0;
//             border:0;
//             background-image:url('./assets/search.png');
//             background-size:25px 25px;
//             background-repeat: no-repeat;
//             background-position: center;
//         }
        
    
//     }

// }
</style>