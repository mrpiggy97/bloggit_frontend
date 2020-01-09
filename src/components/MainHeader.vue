<template>
  <div id="main-header">
    <div id="basic-menu">
      <span @click="redirectHome">home</span>
      <form id="search-form">
        <input type="text" v-model="query" id="search-text" maxlength="100"/>
        <button type="submit" id="search-button"><i class="fa fa-search"></i></button>
      </form>
      <span>communities</span>
      <span>github</span>
    </div>

    <div id="user">
      <span v-if="authenticated">{{username}}</span>
      <span v-if="authenticated" @click="fakeLogout">logout</span>
      <span v-if="!authenticated" @click="fakeLogin">login</span>
      <span v-if="!authenticated" @click="redirectRegister">register</span>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

import { logout } from '@/services/authentication'

export default {
  name: 'MainHeader',

  data(){
    return{
      query: ''
    }
  },

  computed:{
    ...mapState(['authenticated']),
    
    username(){
      if(authenticated){
        value = window.localStorage.getItem(('bloggit_username'))
      }

      return value
    },

    profilePic(){
      let value = null

      if(authenticated){
        value = window.localStorage.getItem('bloggit_profile_pic')
      }
    }
  },

  methods:{
    ...mapMutations(['removeUserCredentials', 'setUserCredentials']),

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
    },

    emitSearch(){
      this.$emit('searchMade', this.query)
    },

    fakeLogout(){
      this.removeUserCredentials()
    },

    fakeLogin(){
      let payload = {
        token: 'dlja;ojl;34234234',
        username: 'mrpiggy07',
        profile_pic: null
      }

      this.setUserCredentials(payload)
    },
  }
}
</script>

<style scoped>
@import './css/MainHeader.css';
</style>