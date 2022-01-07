const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

test ('blogs are returned as json',async () => {

    await api.get('/api/blogs')
             .expect(200)
             .expect('Content-Type',/application\/json/)
},1000000)

test ('the count of blogs at the root',async () => {

    const res = await api.get('/api/blogs')

    expect(res.body.length).toBe(4)


},1000000)


test ('testing for unique identifier in the blog object',async () => {

    const res = await api.get('/api/blogs')

    console.log('res.body is ',res.body)    //

    for(let i=0;i<res.body.length;i++){
        expect(res.body[i]._id).toBeDefined()
    }



},1000000)


test ('testing for post request in the api',async () => {

    const newBlog = { title: 'Something in everything', author:'The Last',url:'Not on internet',likes:43 }
    const initialCount = await api.get('/api/blogs')

    
    await api.post('/api/blogs').send(newBlog).expect(200).expect('Content-Type',/application\/json/)     

    const laterCount = await api.get('/api/blogs')

    expect(laterCount.body.length - initialCount.body.length).toBe(1)

},1000000)




afterAll(() => {
    mongoose.connection.close()
  })
