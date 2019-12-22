import { authenticateTokenInstance } from '../axiosInstances'

const editComment = (newData, commentUUID) => {
    return authenticateTokenInstance({
        method: "PUT",
        url: `/posts/edit-comment/${commentUUID}/`,
        data: JSON.stringify(newData) 
    })
}

export default editComment