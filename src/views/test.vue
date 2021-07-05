<template>
    <div >
        <button @click=logout()>logout</button>
        <h1>Kerjakan dengan mencontek wahai calon koruptor !</h1>
        <div v-for="(so, i) in this.soal" :key="i">

            <p>{{so.soal}}</p>
        <input type="radio" id="a" value="a" v-model="no1" name="no1">
        <label>{{so.opsiA}}</label>
        <br>
        <input type="radio" id="b" value="b" v-model="no1" name="no1">
        <label>{{so.opsiB}}</label>
        <br>
        <input type="radio" id="c" value="c" v-model="no1" name="no1">
        <label>{{so.opsiC}}</label>
        <br>
        <input type="radio" id="d" value="d" v-model="no1" name="no1">
        <label>{{so.opsiD}}</label>
        <br>
        <input type="radio" id="e" value="e" v-model="no1" name="no1">
        <label>{{so.opsiE}}</label>
        <br>

        </div>
        <button @click="kirim">Kirim Jawaban</button>
    </div> 
</template>

<script>
import AuthenticationService from '@/services/Auth-Service'
export default {
    data () {
        return {
            soal : null,
            opsiA: '',
            opsiB: '',
            opsiC: '',
            opsiD: '',
            opsiE: ''
        }
    },
    methods: {
        async getSoal(){
            const response = await AuthenticationService.soal({
            })
            //console.log(response)
            this.soal = response.data
            console.log(this.soal)
        },
        async kirim() {
            //nunggu respon seko server
            const response = await AuthenticationService.login({
            })
            this.$router.push('/home')
        },
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
    },
    beforeMount(){
    	this.getSoal()
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
