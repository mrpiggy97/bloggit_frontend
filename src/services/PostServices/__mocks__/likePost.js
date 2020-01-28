const likePost = (postUUID) => {
    return Promise.resolve({
        data: null,
        status: 200,
        post: postUUID//to pacify the linter
    })
}

export default likePost