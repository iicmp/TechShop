<template>
    <div class="ShopCart">
        <h1>购物车</h1>
        <img v-for="(item) in goodsList" :key="item" :src="item.productImageBig" alt="" />
        {{goodsList}}
    </div>
</template>

<script>
export default {
    name: "ShopCart",
    computed: {
        goodsList() {console.log('this.$store.state.list', this.$store.state.list)
            return this.$store.state.list;
        },
        // // goodsNum() {
        // //     return this.$store.state.num;
        // // },
        // ...mapState(["list"]),
    },

    
    mounted() {
        // console.log(this.goodsList);
        // console.log(this.$store.state.list);
        // console.log(this.$store.state.test);
    },
};
</script>

<style>
</style>