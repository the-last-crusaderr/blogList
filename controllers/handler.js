const router = require('express').Router() 
const Blog = require('../models/blog')                                    



router.get('/', async (request, response) => {
    let blogs = await Blog.find({})
    return response.json(blogs)
  })
  

router.post('/',async (request, response) => {
    const blog = new Blog(request.body)
    const data = await blog.save()
    response.json(data)
  })
  


module.exports = router