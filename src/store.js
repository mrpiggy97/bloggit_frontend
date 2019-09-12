import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authenticated: window.localStorage.getItem('token'),
  },
  mutations: {
    setAuthenticated(state, payload){
      //payload should only be an object two values token and authenticated
      if(state.authenticated === false && payload.authenticated === true){
        window.localStorage.setItem('token', payload.token)
      }
      else if(state.authenticated === true && payload.authenticated === false){
        window.localStorage.removeItem('token')
      }
      state.authenticated = payload.authenticated
    }
  },
  actions: {

  }
})
