<template>
    <div class="wrappe">
        <div id="test" @click="$router.push('/messege')"></div>
    </div>
</template>
<script>
export default {
    mounted() { // поменял с mounted
        const receivername = localStorage.getItem('receivername')
        const ismessege = localStorage.getItem('ismessege')
        if (ismessege == 'yes') {
            const div = document.querySelector('#test')
            div.classList.toggle('box')
            div.textContent = receivername
        }
        localStorage.removeItem('ismessege')
    }
}
</script>
<style scoped>
.wrappe {
    display: flex;
}

.box {
    background-color: yellow;
    height: 15vh;
    width: 10vw;
    border-radius: 10px;
    cursor: pointer;
    padding: 1%;
}
</style>