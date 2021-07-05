<template>
    <div>

        <h1>Welcome !</h1>
        <button @click=logout()>logout</button>
        <button @click=home()>home</button>
        <button @click=test()>test</button>
    </div> 
</template>

<script>
import AuthenticationService from '@/services/Auth-Service'
export default {
    methods: {
        logout(){
            localStorage.removeItem('token')
            this.$router.push('/login')
        },
        home(){
            this.$router.push('/home')
        },
        test(){
            this.$router.push('/test')
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
