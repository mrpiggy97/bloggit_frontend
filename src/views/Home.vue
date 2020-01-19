<template>
  <div id="home-view">
    <post-info v-for="post in posts" :key="post.uuid" :info="post"
    :previewMode="true"
    />
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
      posts: [
        {
          date: '12 may 2019',
          title: 'this is the title i hope this works goddamit shit men goddamit'+
          'work worksdald sa;d ;slkdsa s;lkdal;sdk laskdla;sdk laskdl laskdldk '+
          'lad;ad;as adm;alsd ;laskd;la sd ;laskd  ;asldk ;lask d;asl d;laskd;la',
          text: 'this is the the post i hope it work',
          communities: ['this is the community let see how long can it be,'],
          likes: 1,
          reports: 0,
          liked: null,
          reported: null,
          uuid: '1412sdfsf1223vefdgbdfb3',
          owner: {
            username: 'thisustheusername',
            profile_pic: null
          },
        },
        {
        date: '12 may 2019',
        title: 'this is the title i hope this works goddamit shit men goddamit'+
        'work worksdald sa;d ;slkdsa s;lkdal;sdk laskdla;sdk laskdl laskdldk '+
        'lad;ad;as adm;alsd ;laskd;la sd ;laskd  ;asldk ;lask d;asl d;laskd;la',
        text: 'this is the the post i hope it work',
        communities: ['this is the community let see how long can it be before'],
        likes: 1,
        reports: 0,
        liked: null,
        reported: null,
        uuid: '1412sdfsf1223vsssefdgbdfb3',
        owner: { username: 'thisustheusername', profile_pic: null}
        }
      ],
    }
  },

  computed:{
    ...mapState(['authenticated'])
  },

  methods:{
    ...mapMutations(['removeUserCredentials']),

    async presentApp(){
      
      try{
        let response = await getPosts()
        this.posts = response.data.results     
        console.log(response.data.authenticated)
        console.log(this.authenticated)

        if(response.data.authenticated !== this.authenticated){
          this.removeUserCredentials()
        }
      }

      catch(error){
        console.log("error at Home view in presentApp method beggining at line")
        console.log("32")
        console.log(error)
      }
      finally{
        console.log(this.posts)
      }
    },
  },
}
</script>


<style lang="css">
@import './css/Home.css';
</style>