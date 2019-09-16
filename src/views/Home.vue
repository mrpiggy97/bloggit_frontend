<template>
  <div id="home">
    <post-info v-for="post in posts" :key="post.uuid" :info="post"></post-info>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

import getPosts from '@/services/getPosts'
import PostInfo from '@/components/PostInfo'

export default {
  name: 'home',

  data(){
    return{
      posts: [],
    }
  },

  computed:{
    ...mapState(['authenticated'])
  },

  components:{
    PostInfo
  },

  methods:{
    ...mapMutations(['setAuthenticated']),

    async presentApp(){

      try{
        let response = await getPosts()
        this.posts = response.data.results
        
        if(response.data.authenticated !== this.authenticated){
          //response.data.authenticated will only be changed to be false
          //no need to set token
          this.setAuthenticated({newState: response.data.authenticated})
        }
      }

      catch(error){
        if(error.request.status == 401){
          //unauthorized error
          this.setAuthenticated({newState: false})
        }
      }
    }
  },

  created(){
    this.presentApp()
  }
}
</script>
