import Vue from 'vue'
import Vuex from 'vuex'

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
        window.localStorage.removeItem('bloggit_profile_pic')
      }
      else if(payload.newState === true){
        window.localStorage.setItem('bloggit_token', payload.token)
        window.localStorage.setItem('bloggit_username', payload.username)
        window.localStorage.removeItem('bloggit_profile_pic')

      }
      state.authenticated = payload.newState
    },

    removeUserCredentials(state){
      window.localStorage.removeItem('bloggit_token')
      window.localStorage.removeItem('bloggit_username')
      window.localStorage.removeItem('bloggit_profile_pic')
      state.authenticated = false
    },

    setUserCredentials(state, payload){
      window.localStorage.setItem('bloggit_token', payload.token)
      window.localStorage.setItem('bloggit_username', payload.username)
      window.localStorage.setItem('bloggit_profile_pic')
      state.authenticated = true
    }
  },
  actions: {
  }
})
