import { authenticateTokenInstance } from '../axiosInstances'

const deletePost = (postUUID) => {
    return authenticateTokenInstance({
        method: "POST",
        url: `/posts/delete-post/${postUUID}/`,
        data: null
    })
}

export default deletePost