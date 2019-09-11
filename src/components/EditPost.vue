<template>
    <div id="edit-post">
        <div class="post-header">
            <span class="post-owner">{{owner}}</span>
            <span class="post-date">{{date_posted}}</span>
        </div>
        <form class="post-form-edit">
            <textarea class="post-text" v-model="text"></textarea>
            <button type="submit">edit</button>            
        </form>
    </div>
</template>

<script>
export default {
    name: 'EditPost',
    
    props:{
        info: {type: Object, required: true}
    },

    data(){
        return{
            owner: this.props.info.owner,
            date_posted: this.props.info.date,
            text: this.props.info.text,
        }
    }
}
</script>

<style>

</style>