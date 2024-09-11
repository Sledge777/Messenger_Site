<template   >
    <div class="wrapper">
        <div class="popup">
            <button @click="$router.push('/')" class="btn_back">Назад</button>
            <form @submit.prevent="add()">
                <input v-model="email" class="popup_input" type="email" placeholder="Введите E-mail Пользователя:" required>
                <button class="btn">Добавить</button>
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
            error:'',
            resp:'',
            receivername:'',
        }
    },
    methods: {
        async add() {
            await axios.post('http://localhost:7000/users/find', {
                email: this.email,
            })
            .then(response => {
                console.log(response)
                this.receivername = response.data
            })
            .catch(error => {
                this.error = error;
                console.log(this.error);
            })
            const sendername = localStorage.getItem('sendername')
            if(this.error.message == 'Request failed with status code 400') {
                let div = document.getElementById('validate');
                div.classList.toggle('denied');
                this.resp = 'Пользователь с данной почтой не существует!';
                await setTimeout(() => location.reload(), 3000) 
            }else if(sendername == this.recievername) {
                let div = document.getElementById('validate');
                div.classList.toggle('denied');
                this.resp = 'Это ваша почта!';
                await setTimeout(() => location.reload(), 3000) 
            }else {
                let div = document.getElementById('validate');
                div.classList.toggle('access')
                localStorage.setItem('receivername',this.receivername)
                localStorage.setItem('ismessege','yes')
                await setTimeout(() => this.$router.push('/'), 1000)
            }
        }
    },
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