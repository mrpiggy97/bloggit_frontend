<template>
  <div id="authentication">
      <login-form v-if="login"></login-form>
      <register-form v-else-if="register"></register-form>
  </div>
</template>

<script>
import LoginForm from "@/components/authentication/LoginForm"
import RegisterForm from "@/components/authentication/RegisterForm"
export default {
    name: 'Authentication',

    components:{
        LoginForm,
        RegisterForm
    },

    data(){
        return{
            //action should only be login or register
            register: this.$route.params.action == 'register',
            login: this.$route.params.action == 'login'
        }
    }
}
</script>

<style>

</style>