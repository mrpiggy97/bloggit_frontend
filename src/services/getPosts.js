import { authenticateTokenInstance } from './axiosInstances'

const getPosts = () => {
    return authenticateTokenInstance({
        method: 'GET',
        url: '/posts/',
    })
}

export default getPosts