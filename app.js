const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const blogsRouter = require('./controllers/handler')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')


logger.info('connecting to', config.module.mongodbUrl)


mongoose.connect(config.module.mongodbUrl)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(middleware.requestLogger)

app.set('/api/blogs', blogsRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app