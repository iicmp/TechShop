<template>
  <div class="television">
      全部电视
  </div>
</template>

<script>
export default {

    data() {
        return {
            routeStr:["/Phone","/Television","/Computer","/Hardware","/Netdevice"],
            
            
        };
    },

    async created() {
        try {
            const res = await this.$http.get(this.rou);
            console.log(res);
            // let homeData = res.data;
            // this.goods = homeData.result.data;
        } catch (error) {
            console.log(error.message);
        }
    },

}
</script>

<style>

</style>