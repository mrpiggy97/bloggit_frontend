import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authenticated: window.localStorage.getItem('bloggit_token'),
  },
  mutations: {
    setAuthenticated(state, payload){
      if(payload.newState === false){
        window.localStorage.removeItem('bloggit_token')
      }
      else if(payload.newState === true){
        window.localStorage.setItem('bloggit_token', payload.token)
      }
      state.authenticated = payload.newState
    }
  },
  actions: {

  }
})
