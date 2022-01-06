require('dotenv').config()


const mongodbUrl = process.env.mongodbUrl
const PORT = process.env.PORT


exports.module = {mongodbUrl,PORT}