const http = require('http')
const app = require('./app')
const config = require('./utils/config')
const logger = require('./utils/logger')
const cors = require('cors')
const Blog = require('./models/blog')


const server = http.createServer(app)

app.use(cors())
app.use(express.json())





server.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})
