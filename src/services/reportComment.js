import { authenticateTokenInstance } from './axiosInstances'

const reportComment = (commentUUID) => {
    return authenticateTokenInstance({
        method: "PUT",
        url: `/users/report-comment/${commentUUID}/`
    })
}

export default reportComment