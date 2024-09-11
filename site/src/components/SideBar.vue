<template>
    <div class="wrapper">
        <SideBar_Header class="comp1"/>
        <SideBar_Chats class="comp2"/>
        <SideBar_Footer class="comp3"/>
    </div>
</template>
<script>
import SideBar_Footer from '@/components/SideBar_Footer.vue'
import SideBar_Header from '@/components/SideBar_Header.vue'
import SideBar_Chats from '@/components/SideBar_Chats.vue'

export default {
    components: {
        SideBar_Footer,
        SideBar_Header,
        SideBar_Chats
    },
}
</script>
<style scoped>
.wrapper {
    width: 40%;
    height: 100vh;
    background-color: #2E2E2E;
    display: flex;
    flex-direction: column;
    position: relative;
}
.comp1{
    position: absolute;
    top: 0;
}
.comp3 {
    position: absolute;
    bottom: 0;
}
.comp2 {
    margin-top: 20%;
}
</style>