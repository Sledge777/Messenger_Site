<template>
    <div class="wrapper">
        <SideBar/>
        <div class="line"></div>
        <MainWindowMessege/>
    </div>
</template>
<script>
import SideBar from '@/components/SideBar.vue';
import MainWindowMessege from '@/components/mWM.vue';

export default {
    components: {
        SideBar,
        MainWindowMessege
    }
}
</script>
<style scoped>
.wrapper {
    display: flex;
}
.line {
    background-color: #583E26;
    width: 1.5%;
}
</style>