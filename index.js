require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const mongoConnect = require('./configurations/mongoConnect')
const routes = require('./routes')
const UserRoutes = require('./controllers/userController')
const errorHandler = require('./middlewares/errorHandler')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', routes)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})