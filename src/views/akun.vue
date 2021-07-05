<template>
    <div>

        <h1>My account</h1>
        <button @click=logout()>logout</button>
        <button @click=home()>home</button>
        <button @click=editAkun()>Edit Akun</button>
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
        editAkun(){
            this.$router.push('/myaccount')
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
