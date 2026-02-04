const BaseSQLModel = require('./base')

class AuthorModel extends BaseSQLModel {
    constructor(){
        super('article')
    }

    async findMany(author_id){
        const articles = await super.findMany('author_id', author_id)
        return articles
    }
}

module.exports = AuthorModel