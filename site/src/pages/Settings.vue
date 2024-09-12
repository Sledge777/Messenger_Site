<template>
    <div class="wrapper">
        <SideBar />
        <div class='line'></div>
        <mainWindowSettings />
    </div>
</template>
<script>
import SideBar from '@/components/SideBar.vue';
import mainWindowSettings from '@/components/MainWindowSettings.vue';

export default {
    components: {
        SideBar,
        mainWindowSettings
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