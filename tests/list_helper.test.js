const dummy = require('../utils/list_helper').module.dummy
const totalLikes = require('../utils/list_helper').module.totalLikes
const favouriteBlog = require('../utils/list_helper').module.favouriteBlog
const mostBlogs = require('../utils/list_helper').module.mostBlogs
const mostLikes = require('../utils/list_helper').module.mostLikes




const listOfOneBlogs = [{
    _id: "5a422a851b54a676234d17f7",
    title: "React patterns",
    author: "Michael Chan",
    url: "https://reactpatterns.com/",
    likes: 7,
    __v: 0
  }]


  const blogs = [
    {
      _id: "5a422a851b54a676234d17f7",
      title: "React patterns",
      author: "Michael Chan",
      url: "https://reactpatterns.com/",
      likes: 7,
      __v: 0
    },
    {
      _id: "5a422aa71b54a676234d17f8",
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
      likes: 5,
      __v: 0
    },
    {
      _id: "5a422b3a1b54a676234d17f9",
      title: "Canonical string reduction",
      author: "Edsger W. Dijkstra",
      url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
      likes: 12,
      __v: 0
    },
    {
      _id: "5a422b891b54a676234d17fa",
      title: "First class tests",
      author: "Robert C. Martin",
      url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
      likes: 10,
      __v: 0
    },
    {
      _id: "5a422ba71b54a676234d17fb",
      title: "TDD harms architecture",
      author: "Robert C. Martin",
      url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
      likes: 0,
      __v: 0
    },
    {
      _id: "5a422bc61b54a676234d17fc",
      title: "Type wars",
      author: "Robert C. Martin",
      url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
      likes: 2,
      __v: 0
    }  
  ]  





describe('test of dummy function',() => {

test ('it always returns one',() => {
    expect(dummy([1,2,3,5])).toBe(1)

}) })


describe('total likes',() => {

    
      test ('when the length of blog is only one, function returns likes of that element only',() => {
        expect(totalLikes(listOfOneBlogs)).toBe(7)
      })
      
      test ('when the length of blog is zero',() => {
        expect(totalLikes([])).toBe(0)
      })

      test ('blogs list of random length',() => {
          expect(totalLikes(blogs)).toBe(36)
      })

})



describe('the favourite blogs returns blog of highest likes',() => {

    test ('blogs list of length one', () => {

        expect(favouriteBlog(listOfOneBlogs)).toEqual(listOfOneBlogs[0])

    })

    test ('blogs list of random length',() => {

        expect(favouriteBlog(blogs)).toEqual(blogs[2])
    })


})


describe('the function returns object consists of author and blogs having most no. of blogs',() => {

    test('blog list of length one',() => {
        expect(mostBlogs(listOfOneBlogs)).toEqual({author:'Michael Chan',blogs:1})
    })

    test('blog list of random length',() => {
        expect(mostBlogs(blogs)).toEqual({author:'Robert C. Martin',blogs:3})
    })



})



describe('the function returns object consists of author name and total likes',() => {

    test('blog list of length one',() => {
        expect(mostLikes(listOfOneBlogs)).toEqual({author:'Michael Chan',likes:7})
    })

    test('blog list of random length',() => {
        expect(mostLikes(blogs)).toEqual({author:'Edsger W. Dijkstra',likes:17})
    })

    


})
