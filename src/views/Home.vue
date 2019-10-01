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
        this.posts = response.data.posts
          console.log("Home view console log in presentApp method")        
          console.log(response.data.authenticated)
          console.log(this.authenticated)

        if(response.data.authenticated !== this.authenticated){
          this.setAuthenticated({newState: false})
        }
      }

      catch(error){
        console.log("Home view error presentApp method")
        console.log(error)
      }
    },
  },

  created(){
    this.presentApp()
  }
}
</script>
