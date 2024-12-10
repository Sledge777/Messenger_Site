<template>
    <div class='wrappe'>
        <div> {{ receiver }}</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            receiver: ''
        }
    }
}
</script>
<style scoped>
.wrappe {
    background-color: #EC9704;
    height: 10%;
    width: 99%;
    box-shadow: 0px 1px 2px black;
    border-bottom: 3px black solid;
    border-radius: 0px 20px 20px 0px;
    margin-right: 1%;
    margin-top: 1.3%;
}
</style>