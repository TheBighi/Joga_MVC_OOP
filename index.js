const Express = require("express")
const app = Express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const articleControllerClass = require('./controllers/article.js')
const articleController = new(articleControllerClass)

const authorControllerClass = require('./controllers/author.js')
const authorController = new(authorControllerClass)

const articleRoutes = require('./routes/article')
const authorRoutes = require('./routes/author.js')

app.use('/', articleRoutes)
app.use('/', authorRoutes)

app.listen(3001, () =>{
    console.log('app is at http://localhost:3001')
}) 