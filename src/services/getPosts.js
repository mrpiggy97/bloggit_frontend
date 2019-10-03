import { authenticateTokenInstance, withoutTokenInstance } from './axiosInstances'

const getPosts = () => {
    if(window.localStorage.getItem('bloggit_token')){
        console.log("getPosts service console log")
        console.log(window.localStorage.getItem('bloggit_token'))
        return authenticateTokenInstance({
            method: 'GET',
            url: '/posts/',
        })        
    }
    else{
        return withoutTokenInstance({
            method: 'GET',
            url: '/posts/'
        })
    }
}

export default getPosts