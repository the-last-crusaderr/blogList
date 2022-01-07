
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




exports.module = {dummy,totalLikes,favouriteBlog}




