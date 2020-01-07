<template>
  <div id="main-header">
    <div id="basic-menu">
      <span @click="redirectHome">home</span>
      <input type="text" name="search" id="search" class="search" maxlength="100"/>
      <span>communities</span>
      <span>github</span>
    </div>

    <div id="user">
      <span v-if="authenticated">user</span>
      <span v-if="authenticated">logout</span>
      <span v-if="!authenticated" @click="redirectLogin">login</span>
      <span v-if="!authenticated" @click="redirectRegister">register</span>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

import { logout } from '@/services/authentication'

export default {
  name: 'MainHeader',

  computed:{
    ...mapState(['authenticated', 'username'])
  },

  methods:{
    ...mapMutations(['removeUserCredentials']),

    redirectCreatePost(){
      this.$router.history.push({name: 'CreatePost'})
    },

    redirectHome(){
      this.$router.history.push({name: 'home'})
    },

    redirectLogin(){
      this.$router.history.push({name: 'authentication', params: {action: 'login'}})
    },

    redirectRegister(){
      this.$router.history.push({name: 'authentication', params: {action: 'register'}})
    },

    async makeLogout(){
      if(this.authenticated){
        try{
          await logout()
          this.removeUserCredentials()
        }
        catch(error){
          console.log("error at MainHeader component at makeLogout method")
          console.log("beggining at line 34");
          console.log(error.request.status);
        }
      }
    }
  }
}
</script>

<style scoped>
@import './css/MainHeader.css';
</style>