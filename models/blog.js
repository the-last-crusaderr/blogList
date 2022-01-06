const mongoose = require('mongoose')

const mongoUrl = config.mongodbUrl
mongoose.connect(mongoUrl).then( () => console.log('The application is connected to database.')  )


const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number
})


blogSchema.set('toJSON',{
    transform: (doc,retObj) => {

        delete retObj._id
        delete retObj.__v

    }
} )



module.exports = mongoose.model('Blog',blogSchema)

