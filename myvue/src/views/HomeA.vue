<template>
    <div id="homeA" @scroll="fixNav">
        <Top-bar></Top-bar>
        <selected></selected>
        <Bottom-bar></Bottom-bar>
        
    </div>
</template>

<script>
import TopBar from "@/components/Home/TopBar";
import Selected from "@/components/Home/HomeA/Selected.vue"
import BottomBar from '@/components/Home/BottomBar'
export default {
    name: "HomeA",
    components: {
        TopBar,
        Selected,
        BottomBar
    },
};
</script>

<style scoped lang="scss">
#homeA{
    
}
</style>