<template>
    <div>

        <h1>Edit Akun</h1>
        <p>Nama</p>
        <br>
        <input type="text" name="namaDepan" placeholder="Nama Depan" v-model="updateAccount.namaDepan" />
        <input type="text" name="namaBelakang" placeholder="Nama Belakang" v-model="updateAccount.namaBelakang"/>
        <p>email</p>
        <br>
        <input type="email" name="email" placeholder="email" v-model="updateAccount.email"/>
        <br>
        <p>Nomor Telepon</p>
        <br>
        <input type="text" name="nomorTelepon" placeholder="Nomor Telepon" v-model="updateAccount.nomorTelepon"/>
        <br>
        <p>Username</p>
        <br>
        <input type="text" name="Username" placeholder="Username" v-model="updateAccount.username"/>
        <br>
        <p>password</p>
        <br>
        <input type="password" name="password" placeholder="password" v-model="updateAccount.password"/>
        <br>
        <button @click="changeData()">Edit</button>

    </div> 
</template>

<script>
import AuthenticationService from '@/services/Auth-Service'
export default {
    data () {
        return {
            updateAccount: {
                namaDepan: '',
                namaBelakang: '',
                email: '',
                nomorTelepon: '',
                username: '',
                password: ''
            },
        }
    },
    methods: {
        async changeData(){
            const data = {
                namaDepan : this.namaDepan,
                namaBelakang : this.namaBelakang,
                email : this.email,
                nomorTelepon : this.nomorTelepon,
                username : this.username,
                kataSandi : this.password
            }
            console.log(this.updateAccount)
            const response = await AuthenticationService.changeData(this.updateAccount)
            this.$router.push('/home')
        },
        // mounted(){
        // this.changeData()
        // }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
