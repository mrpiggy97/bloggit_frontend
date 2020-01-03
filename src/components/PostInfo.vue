<template>
    <div :class="[previewMode ? 'post-info-preview' : 'post-info']">
        <div class="post-header">
            <img :src="owner.profile_pic" alt="" class="pic">
            <span>{{owner.username}}</span>
            <span class="date">{{date_posted}}</span>
        </div>
        <span class="post-title">{{title}}</span>
        <span class="post-body" v-if="!previewMode">{{text}}</span>

        <div class="post-footer">
            <div class="communities">
                <span v-for="com in communities" :key="com">{{com}}</span>
            </div>

            <div class="interaction">
                <span class="likes">{{likes}}</span>
                <span class="reports">{{reports}}</span>
                <i :class="['fa fa-thumbs-up', liked ? 'active' : 'inactive']"></i>
                <span :class="['report', reported ? 'active' : 'inactive']">report</span>
            </div>
        </div>
    </div>
</template>

<script>
import likePost from '@/services/PostServices/likePost'

export default {
    name: 'PostInfo',

    props:{
        info: {type: Object, required: true},
        previewMode: {type: Boolean, required: true}
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
                console.log("error ocurred at PostInfo component at like method")
                console.log("beggining at line 50")
                console.log(error.request.status)
            }
        }
    }
}
</script>

<style scoped>
@import './css/PostInfo.css';
</style>