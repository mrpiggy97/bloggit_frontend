import axios from 'axios'

//basically only endpoints that will not require or expect a token
//to authenticate request will use this function

export const withoutTokenInstance = axios.create({
    baseURL: process.env.VUE_APP_BLOGGIT_URL,
    timeout: 5000
})

//all other endpoints that can and will check if request is authenticated should
//use this axios instance
export const authenticateTokenInstance = axios.create({
    baseURL: process.env.VUE_APP_BLOGGIT_URL,
    headers:{
        'Authorization': `JWT ${window.localStorage.getItem('bloggit_token')}`
    },
    timeout: 5000
})

export const CreateModifyInstance = axios.create({
    baseURL: process.env.VUE_APP_BLOGGIT_URL,
    headers:{
        'Content-type': 'application/json',
        'accept': 'application/json',
        'Authorization': `JWT ${window.localStorage.getItem('bloggit_token')}`
    },
    timeout: 5000
})