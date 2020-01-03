<template>
    <div id="edit-post">
        <form class="post-form-edit">
            <textarea class="post-text" v-model="text" :value="text"></textarea>
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
            text: this.info.text
        }
    }
}
</script>

<style>

</style>