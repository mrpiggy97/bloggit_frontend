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
                <span class="reply-box" v-if="!isReply && !replyMade"
                    @click="toggleReplyBox">in response to: {{parent_comment.owner}}</span>
            </div>
            <div v-else class="likes-reports">
                <span class="like">like</span>
                <span class="likes">{{likes}}</span>
                <span class="report">report</span>
            </div>
        </div>
        <div class="comment-reply" v-if="!isReply && !replyMade">
            <form class="reply-box" @submit="reply" v-show="showReplyBox">
                <textarea class="reply-text" v-model="replyText"></textarea>
                <button type="submit" class="reply-button">make reply</button>
            </form>
        </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

import likeComment from '@/services/CommentServices/likeComment'
import reportComment from '@/services/CommentServices/reportComment'
import makeReply from '@/services/CommentServices/makeReply'

export default {

    name: 'CommentInfo',

    props: {
        info: {type: Object, required: true},
        commentfeedUUID: {type: string, required: true},
        isReply: {type: Boolean, required: true},
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
            //these variables will afect the layout and styling of the component
            isOriginal: this.info.is_original,
            hasParent: this.info.has_parent,
            parent: this.info.parent_comment,
            showParent: false,
            //these affect whether component will display a reply box or not
            //and if to show reply box itself
            showReplyBox: false,
            replyText: '',
            replyMade: false,
            replyComment: null
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
        ...mapMutations(['removeUserCredentials']),

        async like(e){
            e.preventDefault()
            try{
                await likeComment(this.uuid)
                this.likes++
            }
            catch(error){
                console.log(error.request.status)
                this.removeUserCredentials()
            }
        },

        async report(e){
            e.preventDefault()
            try{
                await reportComment(this.uuid)
            }
            catch(error){
                console.log(error.request.status)
                this.removeUserCredentials()
            }
        },

        async reply(e){
            e.preventDefault()

            if(this.replyMade){
                return null
            }
            else{

                let data = {
                    text: this.replyText,
                    commentfeed_uuid: this.commentfeedUUID,
                    parent_uuid: this.isOriginal ? null : this.uuid
                }

                try{
                    //make comment, hide toggle replybox icon, hide comment-reply
                    //div and send event listener to parent comment along
                    //with new comment data to render it 
                    let response = await makeReply(data)
                    this.replyComment = response.data
                    this.replyText = ''
                    this.showReplyBox = false
                    this.replyMade = true
                    this.$emit('replyMade', this.isOriginal, this.uuid, this.replyComment)
                }

                catch(error){
                    console.log("error ocurred at CommentInfo component at")
                    console.log("method reply beginning at line 152")
                    console.log(error.request.status)
                    if(error.request.status == 401){
                        this.removeUserCredentials()
                    }
                }

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