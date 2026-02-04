const articleDbModel = require('../models/article')
const authorDbModel = require('../models/author')

const articleModel = new articleDbModel()
const authorModel = new authorDbModel()

class authorController {
    constructor() {
        const authors = []
    }

    async getAuthorById(req, res){
        const id = Number(req.params.author_id)
        const author = await authorModel.findAuthorById(id)
        const articles = await articleModel.findMany(author.id)
        console.log(articles)
        author['articles'] = articles     
        if (!author) {
            return res.status(404).json({msg: 'Author not foundd'})
        }
        res.status(201).json({author: author})
    }
}

module.exports = authorController;