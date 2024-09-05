<template>
    <div class='wrapp'>
        <div class="wrapp_btn">
            <button @click="$router.push('/SignUp')" class="auth_btn">SIGN UP</button>
            <button @click="$router.push('/SignIn')" class="auth_btn">SIGN IN</button>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.wrapp {
    width: 60%;
    height: 100vh;
    background-color:aquamarine ;
} 
.wrapp_btn {
    margin: 0 5%;
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    gap: 5vh;
}
.auth_btn {
    height: 5vh;
    font-size: 3vh;
    background-color: aqua;
    color: white;
    border-radius: 10px;
}
.auth_btn:hover {
    background-color:blueviolet;
}
</style>