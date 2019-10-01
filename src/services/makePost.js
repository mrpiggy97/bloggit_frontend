import { CreateModifyInstance } from '@/services/axiosInstances'
const makePost = (data) => {
    return CreateModifyInstance({
        method: 'POST',
        url: '/posts/make-post/',
        data: JSON.stringify(data)
    })
}

export default makePost