import { authenticateTokenInstance, withoutTokenInstance } from '../axiosInstances'

const getPosts = (page = 1) => {
    if(window.localStorage.getItem('bloggit_token')){
        console.log("getPosts service console log")
        console.log(window.localStorage.getItem('bloggit_token'))
        return authenticateTokenInstance({
            method: 'GET',
            url: `/posts/?page=${page}`,
        })        
    }
    else{
        return withoutTokenInstance({
            method: 'GET',
            url: `/posts/?page=${page}`
        })
    }
}

export default getPosts