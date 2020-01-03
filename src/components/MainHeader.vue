<template>
  <div id="main-header-component">
    <span>home</span>
    <span>user</span>
    <span>login</span>
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
    ...mapMutations(['logUserOut']),
    redirectCreatePost(){
      this.$router.history.push({name: 'CreatePost'})
    },
    redirectLogin(){
      this.$router.history.push({path: '/auth/login'})
    },
    redirectRegister(){
      this.$router.history.push({path: '/auth/register'})
    },
  }
}
</script>

<style scoped>
@import './css/MainHeader.css';
</style>