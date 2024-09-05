<template>
    <div class='wrapp'>
        <img @click="$router.push('/AddUser')" class="plus" src="@/assets/plus.png" alt="add">
        <img @click="$router.push('/')" class="plus2" src="@/assets/images.png" alt="messeges">
        <img @click="$router.push('/Settings')" class="plus3" src="@/assets/settings.png" alt="settings">
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.wrapp {
    height: 10%;
    width: 100%;
    background-color: grey;
    box-shadow: 0px -1px 2px black;
    border-top: 3px black solid;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.plus {
    height: 80%;
    cursor: pointer;
}
.plus2 {
    height: 85%;
    cursor: pointer;
}
.plus3 {
    height: 90%;
    cursor: pointer;
}
</style>