    <template>
        <div class="wrapper">
            <button @click="$router.push('/Settings')" class="btn_back">Назад</button>
            <form @submit.prevent="auth()">
                <input v-model="email" class="input" type="email" placeholder="Введите E-mail" required />
                <input v-model="password" class="input" type="password" placeholder="Введите Пароль" required />
                <button type="submit" class="btn">Зарегистрироваться</button>
                <div id="validate">{{ this.resp }}</div>
            </form>
        </div>
    </template>
<script>
import axios from "axios";

export default {
    data() {
        return {
            email: "",
            password: "",
            error: "",
            resp: "",
            token: "",
        };
    },
    methods: {
        async auth() {
            await axios
                .post("http://localhost:7000/auth/reg", {
                    email: this.email,
                    password: this.password,
                })
                .then((response) => {
                    this.token = response.data;
                    console.log(response);
                })
                .catch((error) => {
                    this.error = error;
                    console.log(this.error);
                });
            if (this.error.message == "Request failed with status code 401") {
                let div = document.getElementById("validate");
                div.classList.toggle("denied");
                this.resp = "Пользователь с данной почтой уже существует!";
            } else if (this.error.message == "Network Error") {
                let div = document.getElementById("validate");
                div.classList.toggle("denied");
                this.resp = "База данных на другом порту!";
            } else {
                let div = document.getElementById("validate");
                div.classList.toggle("access");
                this.resp = "Авторизация успешна!";
                localStorage.setItem("token", this.token);
                localStorage.setItem("sendername", this.email);
                await setTimeout(() => this.$router.push("/"), 1000);
            }
        },
    },
};
</script>
<style scoped>
.wrapper {
    background-color: rgb(174, 142, 94);
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
}

form {
    width: 70vh;
    display: flex;
    flex-direction: column;
    gap: 5vh;
}

.input {
    padding: 2vh;
    background-color: #f3d332;
    border-radius: 10px;
    font-weight: bolder;
    font-size: 3vh;
    color: black;
}

.btn {
    font-size: 3vh;
    font-weight: bolder;
    background-color: #EC9704;
    color: black;
    border-radius: 20px;
    border: 1% black solid;
    padding: 3%;
}

.btn:hover {
    background-color: blueviolet;
}

.btn_back {
    font-size: 3vh;
    font-weight: bolder;
    background-color: #EC9704;
    color: black;
    border-radius: 20px;
    position: absolute;
    top: 0;
    left: 0;
    margin-left: 5%;
    margin-top: 5%;
    padding: 1%;
    border: 1% black solid;
}

.btn_back:hover {
    background-color: blueviolet;
}

.denied {
    color: red;
}

.access {
    color: green;
}
</style>
