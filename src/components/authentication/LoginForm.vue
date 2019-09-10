<template>
  <div id="login-form">
      <form id="login-form" @submit="makeLogin">
          <label for="username">username</label>
          <input type="text" name="username" id="username" v-model="username"/>
          <label for="password">password</label>
          <input type="password" name="password" id="password" v-model="password"/>
          <button type="submit">login</button>
      </form>
  </div>
</template>

<script>
import { login } from '@/services/authentication'
export default {
    name: 'LoginForm',

    data(){
        return{
            username: '',
            password: ''
        }
    },

    methods:{
        async makeLogin(e){
            e.preventDefault()
            let config = {username: this.username,  password: this.password}
            try{
                let response = await login(config)
                console.log(response.data)
            }
            catch(error){
                console.log(error)
                this.username = ''
                this.password = ''
            }
        }
    }
}
</script>

<style>

</style>