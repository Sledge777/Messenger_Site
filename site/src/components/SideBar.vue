<template>
    <div class="wrapper">
        <SideBar_Header/>
        <SideBar_Chats/>
        <SideBar_Footer/>
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
    }
}
</script>
<style scoped>
.wrapper {
    width: 40%;
    height: 100vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>