const Express = require("express")
const path = require('path')
const mysql = require('mysql2')
const app = Express()

app.use(bodyParser.urlencoded({extended: true}))

const articleRoutes = require('./routes/article.js')

app.use('/', articleRoutes)
app.use('/article', articleRoutes)

const authorRoutes = require('./routes/author.js')

app.use('/author', authorRoutes)

app.listen(3001, () =>{
    console.log('app is at http://localhost:3001')
}) 