require('dotenv').config() 


const PORT = process.env.PORT
const mongodbUrl = process.env.mongodbUrl



exports.module = {mongodbUrl,PORT}