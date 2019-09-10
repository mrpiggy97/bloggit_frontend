import { authenticateTokenInstance } from './axiosInstances'

const getPosts = () => {
    return authenticateTokenInstance({
        method: 'get',
        url: '/posts/',
    })
}

export default getPosts