import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authenticated: false,
  },
  mutations: {
    setAuthenticated(state, payload){
      //payload should only be a boolean value
      state.authenticated = payload
    }
  },
  actions: {

  }
})
