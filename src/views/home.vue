<template>
    <div>

        <h1>Welcome !</h1>
        <button @click=logout()>logout</button>
        <button @click=video()>laman video</button>
        <button @click=account()>my account</button>
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
        video(){
            this.$router.push('/video')
        },
        account(){
            this.$router.push('/akun')
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
