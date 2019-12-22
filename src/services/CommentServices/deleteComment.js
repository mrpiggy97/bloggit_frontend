import { authenticateTokenInstance } from '../axiosInstances'

const deleteComment = (commentUUID) => {
    return authenticateTokenInstance({
        method: "POST",
        url: `/posts/delete-comment/${commentUUID}/`,
        data: null
    })
}

export default deleteComment