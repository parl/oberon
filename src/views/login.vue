<template>

    <div>

        <h1>Login</h1>

        <input type="text" name="username" v-model="username" placeholder="username" />
        <br>
        <input type="password" name="password" v-model="password" placeholder="password" />
        <br>
        <button @click="login">Login</button>

        <br>
        <br>
        <router-link to="/register">Belum Punya Akun ?</router-link>

        
    </div> 
</template>

<script>
import AuthenticationService from '@/services/Auth-Service'
export default {
    data () {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        async login () {
            //nunggu respon seko server
            const response = await AuthenticationService.login({
                username: this.username,
                kataSandi: this.password
            })
            //jikuk token seko respon / dadi variabel
            const token = response.data.token
            //token disimpen neng local storage
            localStorage.setItem('token', token)
            this.$router.push('/home')
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import './style/stylelogin.css';
.containerr{
    width: 45%;
    background-color: lightblue;
    margin: 0 auto;
    padding : 20px;
}
</style>
