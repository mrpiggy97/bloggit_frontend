<template>
  <div class="comment-feed-component" @replyMade="addComment">
      <div class="comment-structure">
          <comment-info :info="originalComment" :commentfeedUUID="uuid" :isReply="false">
          </comment-info>

          <comment-info v-if="originalComment.reply" :info="originalComment.reply"
          :commentfeedUUID="uuid" :isReply="true">
          </comment-info>
      </div>
      <blockquote>
          <div v-for="comment in childComments" :key="comment.uuid" class="comment-structure">

            <comment-info :info="comment" :commentfeedUUID="uuid" :isReply="false"></comment-info>

            <comment-info v-if="comment.reply" :info="comment.reply" :commentfeedUUID="uuid"
                :isReply="true">
            </comment-info>
          </div>
      </blockquote>
  </div>
</template>

<script>
import CommentInfo from './CommentInfo'
export default {
    
    name: 'CommentFeed',

    components: CommentInfo,

    props:{
        info: {type: Object, required: true}
    },

    data(){
        return{
            originalComment: this.info.original_comment,
            childComments: this.info.child_comments,
            uuid: this.info.uuid
        }
    },

    methods: {
        getComment(uuid){
            //uuid is unique therefore filter can be used

            let filteredComments = this.childComments.filter(obj => obj.uuid == uuid)
            return filteredComments[0]
        },

        addComment(isOriginal, uuid, reply){
            if(isOriginal){
                this.originalComment.reply = reply
            }
            else{
                comment = this.getComment(uuid)
                comment.reply = reply
            }
        }
    },
}
</script>

<style>

</style>