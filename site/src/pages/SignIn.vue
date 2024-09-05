<template   >
    <div class="wrapper">
        <div class="popup">
            <button @click="$router.push('/')" class="btn_back">Назад</button>
            <form>
                <input v-model="Email" class="popup_input" type="email" placeholder="Введите E-mail">
                <input v-model="Password" class="popup_input" type="password" placeholder="Введите Пароль">
                <button class="btn" @click="">Войти</button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            Email: '',
            Password: '',
        }
    },
    methods: {

    }
}
</script>
<style scoped>
.wrapper {
    background-color: aquamarine;
    height: 100vh;
    width: 100vw;
}
.popup {
    height: 80vh;
    width: 80vw;
    background-color: grey;
    position: absolute;
    margin: 5% 10%;
    box-shadow: 0 0 5px black;
    display: flex; 
    justify-content: center;
    align-items: center;
}
form {
    width: 50vh;
    display: flex;
    flex-direction: column;
    gap: 5vh;
}
.popup_input {
    padding: 2vh;
}
.btn {
    height: 5vh;
    font-size: 3vh;
    background-color: aqua;
    color: white;
    border-radius: 10px;
}
.btn:hover {
    background-color:blueviolet;
}
.btn_back {
    font-size: 3vh;
    background-color: aqua;
    color: white;
    border-radius: 10px;
    position: absolute;
    top:0;
    left: 0;
    margin-left: 5%;
    margin-top: 5%;
    padding: 1%;
    text-align: center;
}
.btn_back:hover {
    background-color:blueviolet;
}

</style>