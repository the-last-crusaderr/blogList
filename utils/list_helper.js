
const dummy = (blog) => 1


const totalLikes = (blogs) => {

    function reducer(accum,elem){
        return elem.likes+accum;
    }

    return blogs.reduce(reducer,0)
}


const favouriteBlog = (blogs) => {

    let max = 0;
    let reqObj = {}

    for(let i=0;i<blogs.length;i++){

        if(blogs[i].likes >= max){
            max = blogs[i].likes
            reqObj = blogs[i]
        }

    }

    return reqObj
}



const mostBlogs = (blogs) => {

    let dict = {}

    for(let i=0;i<blogs.length;i++){

        if(dict[blogs[i].author] === undefined)
            dict[blogs[i].author] = 1;
        else
            dict[blogs[i].author] += 1

    }

    let max = 0
    let reqName = ''
    for(let keys in dict){
        if (dict[keys] > max){
        max = dict[keys]
        reqName = keys
    }
    }

    return( {
        author: reqName, 
        blogs: max
    })

}


const mostLikes = (blogs) => {

    let dict = {}

    for(let i=0;i<blogs.length;i++){

        if(dict[blogs[i].author] === undefined)
            dict[blogs[i].author] = blogs[i].likes;
        else
            dict[blogs[i].author] += blogs[i].likes
    }

    let max = 0
    let reqName = ''
    for(let keys in dict){
        if (dict[keys] > max){
        max = dict[keys]
        reqName = keys
    }
    }

    return( {
        author: reqName, 
        likes: max
    })


}




exports.module = {dummy,totalLikes,favouriteBlog,mostBlogs,mostLikes}




