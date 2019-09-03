import axiosInstance from './axiosInstance'

function login(config){

    data = JSON.stringify({config})
    return axiosInstance({
        method: 'post',
        url: '/login',
        data: data
    })
}

export default login