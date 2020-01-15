import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authenticated: window.localStorage.getItem('bloggit_token') ? true : false,
    username: window.localStorage.getItem('bloggit_username'),
    profilePic: window.localStorage.getItem('bloggit_profile_pic'),
    userCommunities: window.localStorage.getItem('bloggit_user_communities')
  },
  mutations: {
    removeUserCredentials(state){
      window.localStorage.removeItem('bloggit_token')
      window.localStorage.removeItem('bloggit_username')
      window.localStorage.removeItem('bloggit_profile_pic')
      window.localStorage.removeItem('bloggit_user_communities')
      state.authenticated = false
      state.username = null
      state.profilePic = null
      state.userCommunities = null
    },

    setUserCredentials(state, payload){
      window.localStorage.setItem('bloggit_token', payload.token)
      window.localStorage.setItem('bloggit_username', payload.username)
      window.localStorage.setItem('bloggit_profile_pic', payload.profile_pic)
      window.localStorage.setItem('bloggit_user_communities', payload.communities)
      state.authenticated = true
      state.username = payload.username
      state.profilePic = payload.profile_pic
      state.userCommunities = payload.communities
    }
  },
  actions: {
  }
})
