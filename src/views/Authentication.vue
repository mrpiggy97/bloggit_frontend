<template>
  <div id="authentication">
      <login-form v-if="login"></login-form>
      <register-form v-else></register-form>
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

    computed:{
        login(){
            return this.$route.params.action == 'login'
        }
    }
}
</script>

<style>

</style>