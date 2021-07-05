<template>
    <div>

        <h1>Register</h1>
        <p>Nama</p>
        <br>
        <input type="text" name="namaDepan" placeholder="Nama Depan" v-model="createAccount.namaDepan" />
        <input type="text" name="namaBelakang" placeholder="Nama Belakang" v-model="createAccount.namaBelakang"/>
        <p>email</p>
        <br>
        <input type="email" name="email" placeholder="email" v-model="createAccount.email"/>
        <br>
        <p>Nomor Telepon</p>
        <br>
        <input type="text" name="nomorTelepon" placeholder="Nomor Telepon" v-model="createAccount.nomorTelepon"/>
        <br>
        <p>Username</p>
        <br>
        <input type="text" name="Username" placeholder="Username" v-model="createAccount.username"/>
        <br>
        <p>password</p>
        <br>
        <input type="password" name="kataSandi" placeholder="password" v-model="createAccount.kataSandi"/>
        <br>
        <button @click="create_Account()">Register</button>

    </div> 
</template>

<script>
import AuthenticationService from '@/services/Auth-Service'
export default {
    data () {
        return {
            akun: null,
            title: 'Akun',
            createAccount: {
                namaDepan: '',
                namaBelakang: '',
                email: '',
                nomorTelepon: '',
                username: '',
                kataSandi: ''
            },
        }
    },
    methods: {
        async create_Account(){
            //axios.post(this.url_server, this.createAccount)
            // .then(() =>{
            //     this.getBarang()
            // })
            const response = await AuthenticationService.register({
                namaDepan: this.namaDepan,
                namaBelakang: this.namaBelakang,
                email: this.email,
                nomorTelepon: this.nomorTelepon,
                username: this.username,
                kataSandi: this.kataSandi
            })
            this.$router.push('/login')
            .catch(err => {
                alert(err.toString())
                console.log(err)
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
