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
import { mapMutations } from 'vuex'

export default {
    name: 'LoginForm',

    data(){
        return{
            username: '',
            password: ''
        }
    },

    methods:{
        ...mapMutations(['setUserCredentials']),

        async makeLogin(e){
            e.preventDefault()
            let config = {username: this.username,  password: this.password}
            try{
                let response = await login(config)
                this.setUserCredentials(response.data)
                this.$router.history.push({name: 'home'})
            }
            catch(error){
                console.log("error ocurred at LoginForm component at makeLogin")
                console.log("method")
                console.log(error.request.status)
                this.username = ''
                this.password = ''
            }
        }
    }
}
</script>

<style>

</style>