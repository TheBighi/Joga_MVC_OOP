const articleDbModel = require('../models/article')
const authorDbModel = require('../models/author')

const articleModel = new(articleDbModel)
const authorModel = new(authorDbModel)

class authorController {
    constructor() {
        const authors = []
    }

    async getAuthorById(req, res){
        const author = await authorModel.findAuthorById(req.params.id)
        const articles = await articleModel.findMany(author)
        author['articles'] = articles
        res.status(201).json({author: author})
    }
}

module.exports = authorController;