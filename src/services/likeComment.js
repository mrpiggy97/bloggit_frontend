import { authenticateTokenInstance } from './axiosInstances'

const likeComment = (commentUUID) => {
    return authenticateTokenInstance({
        method: "PUT",
        url: `/users/like-comment/${commentUUID}/`,
        data: null
    })
}

export default likeComment