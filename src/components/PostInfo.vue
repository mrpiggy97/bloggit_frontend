<template>
  <div id="post-info">
      <div class="post-header">
          <span class="username">{{owner.username}}</span>
          <span class="date-posted">{{date_posted}}</span>
      </div>

      <div class="post-text">
          <span class="text">{{text}}</span>
      </div>

      <div class="post-communities">
          <span v-for="com in communities" :key="com">{{com}}</span>
      </div>

      <div class="post-social">
          <span class="likes">{{likes}}</span>
          <span class="reports">{{reports}}</span>
          <span :class="['like', liked ? 'active' : 'inactive']">like</span>
          <span :class="['report', reported ? 'active' : 'inactive']">report</span>
      </div>
  </div>
</template>

<script>
import likePost from '@/services/likePost'

export default {
    name: 'PostInfo',

    props:{
        info: {type: Object, required: true}
    },

    data(){
        return{
            owner: this.info.owner,
            date_posted: this.info.date,
            title: this.info.title,
            text: this.info.text,
            communities: this.info.communities_list,
            likes: this.info.likes,
            reports: this.info.reports,
            liked: this.info.liked,
            reported: this.info.reported,
            uuid: this.info.uuid
        }
    },

    methods:{
        async like(){
            try{
                await likePost(this.uuid)
                this.likes++
            }
            catch(error){
                console.log("PostInfo component error console log in like method")
                console.log(error.request.status)
            }
        }
    }
}
</script>

<style scoped>

</style>