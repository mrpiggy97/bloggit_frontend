<template>
  <div id="register-form">
      <form class="register" @submit="registerUser">
          <label for="username">username</label>
          <input type="text" name="username" id="username" v-model="username"/>
          <label for="email">email</label>
          <input type="email" name="email" id="email" v-model="email"/>
          <label for="password1">password 1</label>
          <input type="password" name="password1" id="password1" v-model="password1"/>
          <label for="password2">password 2</label>
          <input type="password" name="password2" id="password2" v-model="password2"/>
          <button type="submit">register</button>
      </form>
  </div>
</template>

<script>
import { register } from '@/services/authentication'

export default {
    name: 'RegisterForm',

    data(){
        return{
            username: '',
            email: '',
            password1: '',
            password2: ''
        }
    },

    methods:{
        async registerUser(e){
            e.preventDefault()
            
            let config = {
                username: this.username,
                email: this.email,
                password1: this.password1,
                password2: this.password2
            }

            try{
                let response = await register(config)
                this.setAuthenticated(true, response.data.token)
                console.log(response)
            }
            catch(error){
                console.log(error.request.status)
                this.username = ''
                this.email = ''
                this.password1 = '',
                this.password2 = ''
            }
        }
    }
}
</script>

<style>

</style>