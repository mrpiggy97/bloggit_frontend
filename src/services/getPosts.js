import axiosInstance from './axiosInstance'

function getPosts(){
    return axiosInstance({
        method: 'get',
        url: '/posts',
    })
}

export default getPosts