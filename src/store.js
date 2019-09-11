import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authenticated: window.localStorage.getItem('token'),
  },
  mutations: {
    setAuthenticated(state, payload){
      //payload should only be a boolean value
      if(payload === false){
        window.localStorage.removeItem('token')
      }
      state.authenticated = payload
    }
  },
  actions: {

  }
})
