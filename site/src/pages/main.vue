<template>
    <div class='wrapper'>
        <SideBar/>
        <div class='line'></div>
        <mainWindow/>
    </div>
</template>
<script>
import SideBar from '@/components/SideBar.vue'
import mainWindow from '@/components/mainWindow.vue'

export default {
    components: {
      SideBar,
      mainWindow
    },
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