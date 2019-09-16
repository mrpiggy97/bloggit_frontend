<template>
  <div id="main-header">
      <span class="shit">icon here</span>
      <span @click="redirectLogin">login</span>
      <span @click="redirectRegister">register</span>
      <span @click="redirectCreatePost">create post</span>
      <span v-if="authenticated" @click="makeLogout">logout</span>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

import { logout } from '@/services/authentication'

export default {
  name: 'MainHeader',

  computed:{
    ...mapState(['authenticated'])
  },

  methods:{
    ...mapMutations(['setAuthenticated']),
    redirectCreatePost(){
      this.$router.history.push({name: 'CreatePost'})
    },
    redirectLogin(){
      this.$router.history.push({path: '/auth/login'})
    },
    redirectRegister(){
      this.$router.history.push({path: '/auth/register'})
    },

    async makeLogout(){
      try{
        let response = await logout()
        this.setAuthenticated({newState: false}) //new authenticated state and token
      }
      catch(error){
        console.log(error.request.status)
      }
    }
  }
}
</script>

<style scoped>
@import './css/MainHeader.css';
</style>