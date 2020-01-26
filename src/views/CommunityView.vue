<template>
    <div id="community-view">
        <div id="community">
            <span>c/{{community}}</span>
        </div>
        <div id="community-related">
            <post-info v-for="post in posts" :key="post.uuid" :previewMode="true"
                        :info="post"/>
        </div>
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
            posts: []
        }
    },

    computed:{
        ...mapState(['authenticated', 'userCommunities']),
        community(){
            return this.$route.params.community
        }
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
                console.log(error.request.status)
                if(error.request.status == 401 || error.request.status == 403){
                    this.removeUserCredentials()
                }
            }
        }
    },
}
</script>

<style>
@import './css/CommunityView.css';
</style>