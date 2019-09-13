<template>
    <div id="create-post">
        <form class="post-form" @submit="createPost" v-if="authenticated">
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
import makePost from '@/services/makePost'
import { mapState } from 'vuex'

export default {
    name: 'CreatePost',

    data(){
        return{
            title: '',
            text: '',
            communities: ''
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
        async create(e){
            e.preventDefault()
            try{
                let response = await makePost(this.postData)
                console.log(response)
                this.title = ''
                this.text = ''
                this.communities = ''
            }

            catch(error){
                console.log(error)
            }
        }
    }
}
</script>

<style>

</style>