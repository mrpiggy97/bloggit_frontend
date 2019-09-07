import axios from 'axios'

let baseURL = process.env.API_URL
let token = window.localStorage.getItem('token')

const axiosInstance = axios.create({
    baseURL: baseURL,
    headers:{
        Authorization: `Token ${token}`
    }
})

export default axiosInstance