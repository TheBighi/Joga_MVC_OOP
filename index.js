const Express = require("express")
const path = require('path')
const mysql = require('mysql2')
const app = Express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const articleControllerClass = require('./controllers/article.js')
const articleController = new(articleControllerClass)

const articleRoutes = require('./routes/article')
app.use('/', articleRoutes)

app.listen(3001, () =>{
    console.log('app is at http://localhost:3001')
}) 