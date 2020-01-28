//TODO: FINISH WITH THE MOCK DATA FOR PAGE 1 AND PAGE 2

const getPosts = (page = 1) => {
    let results

    let post1 = new Object()
    let post2 = new Object()

    post1.title = "first post title"
    post1.text = "this is the fist post text"
    post1.owner = {username: 'mrpiggy97', profile_pic: null}
    post1.date = "april 1 2019"
    post1.communities = ['mock']
    post1.likes = 1
    post1.liked = null
    post1.reported = null
    post1.uuid = ";asskdlas324234223"

    post2.title = "second post title"
    post2.text = "this is the second post text"
    post2.owner = {username: "dick grey", profile_pic: null}
    post2.date = "april 2 2020"
    post2.communities = ['mock']
    post2.likes = 1
    post2.liked = null
    post2.reported = null
    post2.uuid = "a.aka;l234234"

    if(page == 1){
        results = [post1]
    }
    else if(page == 2){
        results = [post2]
    }

    return Promise.resolve({
        data: {
            authenticated: false,
            count: 1,
            next_page: results[0] == post1 ? 2 : null,
            previous_page: results[0] == post2 ? 1 : null,
            results: results 
        },
        status: 200
    })
}

export default getPosts