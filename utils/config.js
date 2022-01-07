require('dotenv').config() 


const PORT = process.env.PORT
const mongodbUrl = process.env.NODE_ENV === 'test' ?  process.env.testMongodbUrl  :   process.env.mongodbUrl



exports.module = {mongodbUrl,PORT}