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
            posts: [
                {
                date: '12 may 2019',
                title: 'this is the title i hope this works goddamit shit men goddamit'+
                'work worksdald sa;d ;slkdsa s;lkdal;sdk laskdla;sdk laskdl laskdldk '+
                'lad;ad;as adm;alsd ;laskd;la sd ;laskd  ;asldk ;lask d;asl d;laskd;la',
                text: 'this is the the post i hope it work',
                communities: ['this is the community let see how long can it'],
                likes: 1,
                reports: 0,
                liked: null,
                reported: null,
                uuid: '1412sdfsf1ssss223vefdgbdfb3',
                owner: { username: 'thisustheusername', profile_pic: null}
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
                uuid: '1412sdfsf1223vefdgbdfb3',
                owner: { username: 'thisustheusername', profile_pic: null}
                }
            ],
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
                console.log(errore.request.status)
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