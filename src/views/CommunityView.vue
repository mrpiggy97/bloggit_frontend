<template>
    <div class="community-view">
        <span>c/{{community}}</span>
        <post-info v-for="post in posts" :key="post.uuid" :previewMode="true"
                    :info="post"/>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

import PostInfo from '@/components/PostInfo'
import getPostsByCommunity from '@/services/PostServices/getPostsByCommunity'

export default {
    name: 'CommunityView',

    components:{
        PostInfo,
    },

    data(){
        return{
            community: this.$route.params.community,
            posts: '',
        }
    },

    computed:{
        ...mapState(['authenticated', 'userCommunities'])
    },

    methods: {
        ...mapMutations(['removeUserCredentials']),
        async getPosts(){
            try {
                let response = await getPostsByCommunity(this.community)
                this.posts = response.data.results    
            }
            catch (error) {
                console.log("an error ocurred at CommunityView at getPosts")
                console.log("getPosts method")
                console.log(errore.request.status)
                if(error.request.status == 401 || error.request.status == 403){
                    this.removeUserCredentials()
                }
            }
        }
    }
}
</script>

<style>

</style>