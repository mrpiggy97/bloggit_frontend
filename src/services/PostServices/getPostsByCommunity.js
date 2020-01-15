import { authenticateTokenInstance, withoutTokenInstance } from '../axiosInstances'

function getPostsByCommunity(community, page = 1){
    let instance

    if(window.localStorage.getItem('token') === null){
        instance = withoutTokenInstance
    }
    else{
        instance = authenticateTokenInstance
    }

    return instance({
        method: 'get',
        url: `/posts/posts-by-community/${community}/?page=${page}/`
    })
}

export default getPostsByCommunity