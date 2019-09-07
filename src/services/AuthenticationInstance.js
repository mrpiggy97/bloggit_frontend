import axios from 'axios'

let baseUrl = process.env.API_URL

const AuthenticationInstance = axios.create({
    baseURL: baseUrl,
})

export default AuthenticationInstance