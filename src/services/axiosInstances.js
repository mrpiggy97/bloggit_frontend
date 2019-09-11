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
        Authorization: `Token ${window.localStorage.getItem('token')}`
    },
    timeout: 5000
})