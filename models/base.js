const { exec } = require('wsh')
const conn = require('../utils/db')

class BaseSQLModel {
    constructor(tableName){
        this.tableName = tableName
    }

    executeQuery(query, params) {
        return new Promise((resolve, reject) => {
            conn.query(query, params, (error, results) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(results)
                }
            })
        })
        }
    

    async findAll(){
        const query = `SELECT * FROM ${this.tableName}`;
        const results = await this.executeQuery(query)
        return results
    }

    async findById(id){
        console.log('findById called with id:', id, 'type:', typeof id)
        const query = `SELECT * FROM ${this.tableName} WHERE id = ?`
        console.log('SQL query:', query)
        const results = await this.executeQuery(query, [id])
        console.log('Query results:', results)
        return results[0]
    }


    async findOne(where, value){
        const query = `SELECT * FROM ${this.tableName} WHERE ${where} = '${value}'`
        const results = await this.executeQuery(query, [where, value])
        return results[0]
    }

    async findMany(where, value){
        const query = `SELECT * FROM ${this.tableName} WHERE ${where} = ${value}`
        console.log(query)
        const results = await this.executeQuery(query, [where, value])
        return results
    }

    async create(data){
        const query = `INSERT INTO ${this.tableName} WHERE ${where}="${value}"`
        const result = await this.executeQuery(query, data)
        return results.insertId
    }

    async update(id, data){
        const query = `UPDATE ${this.tableName} SET ? WHERE id = ?`
        const result = await this.executeQuery(query, [data, id])
        return result.affectedRows
    }

    async deleteByID(id) {
        const query = `DELETE FROM ${this.tableName} WHERE id = ?`
        const result = await this.executeQuery(query, [id])
        return result.affectedRows
    }

}
module.exports = BaseSQLModel