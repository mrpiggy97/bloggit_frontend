import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authenticated: window.localStorage.getItem('bloggit_token'),
  },
  mutations: {
    setAuthenticated(state, payload, token){
      if(payload === false){
        window.localStorage.removeItem('bloggit_token')
      }
      else if(payload === true){
        window.localStorage.setItem('bloggit_token', token)
      }
      state.authenticated = payload
    }
  },
  actions: {

  }
})
