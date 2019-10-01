import Vue from 'vue'
import Vuex from 'vuex'

import { login, logout } from '@/services/authentication'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authenticated: window.localStorage.getItem('bloggit_token') ? true : false,
  },
  mutations: {
    setAuthenticated(state, payload){
      if(payload.newState === false){
        window.localStorage.removeItem('bloggit_token')
        window.localStorage.removeItem('bloggit_username')
      }
      else if(payload.newState === true){
        window.localStorage.setItem('bloggit_token', payload.token)
        window.localStorage.setItem('bloggit_username', payload.username)
      }
      state.authenticated = payload.newState
    }
  },
  actions: {
  }
})
