<template>
    <div class='wrappe'>
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
.wrappe {
    height: 10%;
    width: 99%;
    background-color: #EC9704;
    box-shadow: 0px -1px 2px black;
    border-top: 3px black solid;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 20px 0px 0px 20px;
    margin-bottom: 2%;
    margin-left: 1%;
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