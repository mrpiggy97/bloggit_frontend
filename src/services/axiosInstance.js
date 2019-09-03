import axios from 'axios'

let baseURL = 'http://fabianjesusrivas.pythonanywhere.com'
let localhost = 'http://localhost:8000'

const axiosInstance = axios.create({
    baseURL: localhost
})

export default axiosInstance