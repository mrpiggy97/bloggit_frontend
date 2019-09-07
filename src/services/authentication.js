import AuthenticationInstance from './AuthenticationInstance'
import axiosInstance from './axiosInstance'

export function login(config){

    data = JSON.stringify({config})
    return AuthenticationInstance({
        method: 'post',
        url: '/rest-auth/login/',
        data: data
    })
}

export function logout(token){
    return axiosInstance({
        method: 'post',
        url: '/rest-auth/logout/',
    })
}

export function register(config){
    let data = JSON.stringify(config)
    return AuthenticationInstance({
        method: 'post',
        url: '/register/',
        data: data
    })
}