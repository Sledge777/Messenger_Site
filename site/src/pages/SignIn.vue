<template   >
    <div class="wrapper">
        <div class="popup">
            <button @click="$router.push('/')" class="btn_back">Назад</button>
            <form @submit.prevent="auth()">
                <input v-model="email" class="popup_input" type="email" placeholder="Введите E-mail" required>
                <input v-model="password" class="popup_input" type="password" placeholder="Введите Пароль" required>
                <button class="btn">Войти</button>
                <div id="validate">{{ this.resp }}</div>
            </form>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            email: '',
            password: '',
            error:'',
            resp:'',
            token:'',
        }
    },
    methods: {
        async auth() {
            await axios.post('http://localhost:7000/auth/login', {
                email: this.email,
                password: this.password
            })
            .then(response => {
                this.token = response.data.token
                console.log(response)
            })
            .catch(error => {
                this.error = error;
                console.log(this.error);
            })
            if(this.error.message == 'Request failed with status code 401') {
                let div = document.getElementById('validate');
                div.classList.toggle('denied');
                this.resp = 'Пользователь с данной почтой уже существует!';
            }else {
                let div = document.getElementById('validate');
                div.classList.toggle('access');
                this.resp = 'Авторизация успешна!';
                console.log(this.token)
                localStorage.setItem('token',this.token);
                localStorage.setItem('sendername',this.email);
                await setTimeout(() => this.$router.push('/'), 1000)
            }
        }
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
.denied {
  color: red;
}
.access {
  color: green;
}
</style>