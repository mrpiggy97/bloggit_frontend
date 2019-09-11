<template>
  <div id="post-info">
      <div class="post-header">
          <span class="username">{{username}}</span>
          <span class="date-posted">{{date_posted}}</span>
      </div>

      <div class="post-text">
          <span class="text">{{text}}</span>
      </div>

      <div class="post-communities">
          <span v-for="com in communities" :key="com.slug">{{com.slug}}</span>
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
export default {
    name: 'PostInfo',

    props:{
        info: {type: Object, required: true}
    },

    data(){
        return{
            owner: this.props.info.owner,
            date_posted: this.props.info.date,
            title: this.props.info.title,
            text: this.props.info.text,
            communities: this.props.info.communities_list,
            likes: this.props.info.likes,
            reports: this.props.info.reports,
            liked: this.props.info.liked,
            reported: this.props.info.reported,
            uuid: this.props.info.uuid
        }
    }
}
</script>

<style scoped>

</style>