<template>
  <div id="app">
    <div id="header">
      <main-header></main-header>
    </div>

    <div id="posts">
    </div>

    <div id="footer">

    </div>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader'
import getPosts from '@/services/getPosts'
export default {

  name: 'App',

  components:{
    MainHeader,
  },

  methods:{
    async retrievePosts(){
      try{
        let response = await getPosts()
        console.log(response.data)
      }

      catch(error){
        console.log(error)
      }
    }
  },

  created(){
    this.retrievePosts()
  }
}
</script>

<style>
@import './App.css';
</style>
