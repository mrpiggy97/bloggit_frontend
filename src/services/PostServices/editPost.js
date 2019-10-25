import { authenticateTokenInstance } from '../axiosInstances'

const editPost = (newData, postUUID) => {
    return authenticateTokenInstance({
        method: 'PUT',
        url: `/posts/edit-post/${postUUID}/`,
        data: JSON.stringify(newData)
    })
}

export default editPost