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
                <span v-for="com in communities" :key="com"
                    @click="redirectCommunity(com)"
                    class="community">c/{{com}}</span>
            </div>
            
            <div class="interaction" v-if="authenticated">
                <span class="likes">{{likes}}</span>
                <i v-if="!liked" class="fa fa-thumbs-up inactive" @click="like"></i>
                <i v-else class="fa fa-thumbs-up active"></i>
                <span v-if="!reported" class="report">report</span>
            </div>

            <div class="interaction" v-else>
                <span class="likes">{{likes}}</span>
                <i class="fa fa-thumbs-up inactive"></i>
                <span class="report">report</span>
            </div>
        </div>
    </div>
</template>

<script>
import likePost from '@/services/PostServices/likePost'
import reportPost from '@/services/PostServices/reportPost'
import { mapState, mapMutations } from 'vuex'

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
            communities: this.info.communities,
            likes: this.info.likes,
            reports: this.info.reports,
            liked: this.info.liked,
            reported: this.info.reported,
            uuid: this.info.uuid
        }
    },

    computed:{
        ...mapState(['authenticated'])
    },

    methods:{
        ...mapMutations(['removeUserCredentials']),
        async like(){
            //just in case, if else statements in template should take care
            //handle wether or not we should make a call to the backend
            if(!this.reported && this.authenticated){
                try{
                    await likePost(this.uuid)
                    this.likes++
                }
                catch(error){
                    console.log("error ocurred at PostInfo component at like method")
                    console.log(error.request.status)
                    if(error.request.status == 401){
                        this.removeUserCredentials()
                    }
                }                
            }
            else{
                return null
            }
        },

        async report(){
            //just in case, if else statements in template should handle
            //whether or not we should make a call to the backend
            if(!this.reported && this.authenticated){
                try{
                    await reportPost(this.uuid)
                    this.reported = true
                }
                catch(error){
                    console.log("error ocurred in PostInfo component at report")
                    console.log(error.request.status)
                    if(error.request.status == 401){
                        this.removeUserCredentials()
                    }
                }                
            }
            else{
                return null
            }
        },

        redirectCommunity(community){
            this.$router.history.push({
                name: 'community',
                params: {'community': community}
            })
        },
    }
}
</script>

<style scoped>
@import './css/PostInfo.css';
</style>