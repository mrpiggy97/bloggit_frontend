import { authenticateTokenInstance } from '../axiosInstances'

const makeComment = (data) => {
    return authenticateTokenInstance({
        method: "POST",
        url: `/posts/make-comment/`,
        data: JSON.stringify(data)
    })
}

export default makeComment