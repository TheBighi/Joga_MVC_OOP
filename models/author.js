const BaseSQLModel = require('./base')

class AuthorModel extends BaseSQLModel {
    constructor(){
        super('author')
    }

    async findAuthorById(author_id){
        const author = await super.findById(author_id)
        return author
    }

    async findAuthorByName(author_name){
        const author = await super.findOne('name', author_name)
        return author
    }
}

module.exports = AuthorModel