<template>
    <div class='wrapp'>
        <div v-if="auth()" class="text">
            Учетная запись авторизована!
        </div>
        <div v-else class="wrapp_btn">
            <button @click="$router.push('/SignUp')" class="auth_btn">SIGN UP</button>
            <button @click="$router.push('/SignIn')" class="auth_btn">SIGN IN</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        auth() {
            if (localStorage.getItem('token')) {
                return true
            } else {
                return false
            }
        }
    }
}
</script>
<style scoped>
.wrapp {
    width: 60%;
    height: 100vh;
    background-color: #2E2E2E;
}

.wrapp_btn {
    margin: 0 5%;
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    gap: 5vh;
}

.auth_btn {
    font-size: 5vh;
    font-weight: bolder;
    background-color: #EC9704;
    color: black;
    border: 1% black solid;
    border-radius: 20px;
    padding: 2%;
    transition: all 0.3s;
}

.auth_btn:hover {
    background-color: #FFCF7C;
    transition: all 0.3s;
}

.text {
    color: #024a7a;
    margin-left: 10%;
    font-size: 25px;
}
</style>