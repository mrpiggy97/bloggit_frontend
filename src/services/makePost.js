import { authenticateTokenInstance } from '@/services/axiosInstances'

const makePost = (data) => {
    return authenticateTokenInstance({
        method: 'POST',
        url: '/posts/make-post/',
        headers:{
            'Content-type': 'application/json',
            'Accept': 'application/json'
        },
        data: JSON.stringify(data)
    })
}

export default makePost