import { authenticateTokenInstance } from './axiosInstances'

const reportPost = (postUUID) => {
    return authenticateTokenInstance({
        method: "PUT",
        url: `/users/report-post/${postUUID}/`,
        data: null
    })
}

export default reportPost