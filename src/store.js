import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authenticated: window.localStorage.getItem('token'),
  },
  mutations: {
    setAuthenticated(state, payload, token){
      if(payload === false){
        window.localStorage.removeItem('token')
      }
      else if(payload === true){
        window.localStorage.setItem('token', token)
      }
      state.authenticated = payload
    }
  },
  actions: {

  }
})
