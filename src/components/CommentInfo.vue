<template>
  <div :class="Layout">
        <div class="comment-header">
            <span class="comment-user">{{owner.username}}</span>
            <span class="comment-date">{{date}}</span>
        </div>

        <div :class="[isOriginal ? 'original-comment-body' : 'child-comment-body']">
            <div v-if="hasParent" class="parent-comment">
                <span @click="toggleShowParent" class="toggle-parent">
                    in response to {{parent.owner}}
                </span>
                <span v-show="showParent" class="parent-owner">{{parent.text}}</span>
            </div>
            <span class="comment-text">{{text}}</span>
        </div>

        <div class="comment-footer">
            <div v-if="authenticated" class="likes-reports">
                <span v-if="liked" class="liked">liked</span>
                <span v-else @click="like" class="like">like</span>
                <span class="likes">{{likes}}</span>
                <span v-if="reported" class="reported">reported</span>
                <span v-else @click="report" class="report">report</span>
                <span class="reply-box" @click="toggleReplyBox"></span>
            </div>
            <div v-else class="likes-reports">
                <span class="like">like</span>
                <span class="likes">{{likes}}</span>
                <span class="report">report</span>
            </div>
        </div>
        <form class="reply-box" @submit="reply">
            <textarea class="reply-text" v-model="replyText"></textarea>
            <button type="submit" class="reply-button">make reply</button>
        </form>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

import likeComment from '@/services/CommentServices/likeComment'
import reportComment from '@/services/CommentServices/reportComment'

export default {

    name: 'CommentInfo',

    props: {
        info: {type: Object, required: true}
    },

    data(){
        return{
            owner: this.info.owner,
            uuid: this.info.uuid,
            date: this.info.date,
            text: this.info.text,
            likes: this.info.likes,
            reports: this.info.reports,
            liked: this.info.liked,
            reported: this.info.reported,
            isOriginal: this.info.is_original,
            hasParent: this.info.has_parent,
            parent: this.info.parent_comment,
            showReplyBox: false,
            showParent: false,
            replyText: ''
        }
    },

    computed:{
        ...mapState(['authenticated']),

        OriginalCommentLayout(){
            let value;

            if(this.authenticated === true){
                value = "original-comment-user-authenticated"
            }
            else if(this.authenticated === false){
                value = "original-comment-user-unauthenticated"
            }

            return value
        },

        ChildCommentLayout(){
            let value;
            if(this.authenticated === true){
                value = "child-comment-user-authenticated"
            }
            else if(this.authenticated === false){
                value = "child-comment-user-unauthenticated"
            }

            return value
        },

        Layout(){
            let value;

            if(this.isOriginal){
                value = this.OriginalCommentLayout
            }
            else{
                value = this.ChildCommentLayout
            }

            return value
        }
    },

    methods:{
        ...mapMutations(['logUserOut']),

        async like(e){
            e.preventDefault()
            try{
                await likeComment(this.uuid)
                this.likes++
            }
            catch(error){
                console.log(error.request.status)
                this.logUserOut()
            }
        },

        async report(e){
            e.preventDefault()
            try{
                await reportComment(this.uuid)
            }
            catch(error){
                console.log(error.request.status)
                this.logUserOut()
            }
        },

        toggleReplyBox(){
            if(this.showReplyBox){
                this.showReplyBox = false
            }
            else{
                this.showReplyBox = true
            }
        },

        toggleShowParent(){
            if(this.showParent){
                this.showParent = false
            }
            else{
                this.showParent = true
            }
        }
    },
}
</script>

<style>

</style>