const router = require('express').Router() 
const Blog = require('../models/blog')                                    



router.get('/', async (request, response) => {
    let blogs = await Blog.find({})
    return response.json(blogs)
  })


router.get('/:id',async (request,response) => {

  const data = await Blog.find({"_id":request.params.id})

  response.json(data)
})  
  

router.post('/',async (request, response) => {
    const blog = new Blog(request.body)

    if(!blog["title"] && !blog["url"])
      response.status(400)

    if(!blog["likes"])
      blog["likes"] = 0      
    const data = await blog.save()
    response.json(data)
  })


router.delete('/:id',async (request,response) => {

   await Blog.findOneAndRemove({"_id":request.params.id})

  response.status(204)

})

  


module.exports = router