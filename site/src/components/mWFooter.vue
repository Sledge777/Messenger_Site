<template>
    <div class="wrappe">
       <input v-model="messageContent" type="text" placeholder="Введите текст"> 
       <img @click="sendMessage" src="@/assets/send.png" alt="send">
       <img src="@/assets/voice.png" alt="voice">
    </div>
</template>
<script>
export default {
    data() {
        return {
            messageContent: '',
        }
    },
    methods: {
        sendMessage() {
            this.$emit('sendMessage', this.messageContent); // Эмитируем событие sendMessage с содержимым сообщения
            this.messageContent = ''; // Очищаем поле ввода после отправки
    },
    }
}
</script>
<style scoped>
.wrappe {
    height: 10%;
    width: 99%;
    background-color: #EC9704;
    box-shadow: 0px -1px 2px black;
    border-top: 3px black solid;
    border-radius: 0px 20px 20px 0px;
    margin-bottom: 1.3%;
    margin-right: 1%;
    display: flex;
    align-items: center;
    padding: 0 2.5%;
    gap: 5%;
}
img {
    height: 90%;
    cursor: pointer;
}
input {
    width: 78%;
    background-color: #f3d332;
    border-radius: 5px;
    padding: 1.5%;
}
</style>