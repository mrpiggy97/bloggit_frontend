<template>
  <div id="home-view">
    <span v-if="previousPage" @click="getPagePosts(previousPage)">previous</span>
    <span v-if="nextPage" @click="getPagePosts(nextPage)">next</span>
    <post-info v-for="post in posts" :key="post.uuid" :info="post"
    :previewMode="true"/>
    <span v-if="previousPage" @click="getPagePosts(previousPage)">previous</span>
    <span v-if="nextPage" @click="getPagePosts(nextPage)">next</span>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

import getPosts from '@/services/PostServices/getPosts'
import PostInfo from '@/components/PostInfo'

export default {
  name: 'home',

  components: {
    PostInfo
  },

  data(){
    return{
      posts: [],
      nextPage: null,
      previousPage: null
    }
  },

  computed:{
    ...mapState(['authenticated']),
  },

  methods:{
    ...mapMutations(['removeUserCredentials']),

    async getPagePosts(page){
      
      try{
        let response = await getPosts(page)
        this.posts = response.data.results
        this.nextPage = response.next_page
        this.previousPage = response.previous_page

        if(response.data.authenticated !== this.authenticated){
          this.removeUserCredentials()
        }
      }

      catch(error){
        console.log("error at Home view in presentApp method")
        console.log(error)
      }
      finally{
        console.log(this.posts)
      }
    },
  },

  created(){
    this.getPagePosts(1)//1 for inital posts
  }
}
</script>


<style lang="css">
@import './css/Home.css';
</style>