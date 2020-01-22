<template>
    <div id="create-post">
        <form class="post-form" @submit="create" v-if="authenticated">
            <label for="title">title</label>
            <input type="text" id="title" maxlength="200" v-model="title"/>
            <label for="text">text</label>
            <textarea  id="text" cols="30" rows="10" maxlength="700" v-model="text"></textarea>
            <label for="communities">communities separated by comas (,)</label>
            <input type="text" id="communities" maxlength="100" v-model="communities"/>
            <button type="submit">post</button>
        </form>
        <span v-else>please login or sign up to make a post</span>
    </div>
</template>

<script>
import makePost from '@/services/PostServices/makePost'
import { mapState, mapMutations } from 'vuex'

export default {
    name: 'CreatePost',

    data(){
        return{
            title: '',
            text: '',
            communities: '',
            newPost : ''
        }
    },

    computed:{
        ...mapState(['authenticated']),

        postData(){
            return{
                title: this.title,
                text: this.text,
                add_communities: this.communities.split(",")
            }
        }
    },

    methods:{
        ...mapMutations(['removeUserCredentials']),

        async create(e){
            e.preventDefault()
            try{
                let response = await makePost(this.postData)
                this.title = ''
                this.text = ''
                this.communities = ''
                this.newPost = response.data
            }

            catch(error){
                console.log("error ocurred at CreatePost component at create")
                console.log("method")
                if(error.request.status == 401){
                 this.removeUserCredentials()   
                }
            }
        }
    }
}
</script>

<style>

</style>