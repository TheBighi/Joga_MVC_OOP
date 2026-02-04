const BaseSQLModel = require('./base')

class ArticleModel extends BaseSQLModel {
    constructor(){
        super('article')
    }

    async findAll(){
        const articles = await super.findAll()
        return articles
    }

    async findOne(slug){
        const article = await super.findOne('slug', slug)
        return article
    }

    async findMany(slug){
        const article = await super.findMany('slug', slug)
        return article
    }
}

module.exports = ArticleModel