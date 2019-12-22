import CreateModifyInstance from '@/services/axiosInstances'

function makeReply(data){
    //a reply can either contribute to the discussion initiated by
    //the original comment or a direct reply to another comment

    //data should contain text, commentfeed_uuid and parent_uuid
    //(which could be null)
    return CreateModifyInstance({
        method: 'POST',
        url: '/make-child-comment/',
        data: JSON.stringify(data)
    })
}

export default makeReply