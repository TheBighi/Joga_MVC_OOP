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
    }

    async function findAll(){
        const query = `SELECT * FROM ${this.tableName}`;
        const results = await this.executeQuery(query)
        return results
    }

    async function findById(id){
        const query = `SELECT * FROM ${this.tableName} WHERE id = ?`
        const results = await this.executeQuery(query)
        return results
    }

    async function findOne(where, value){
        const query = `SELECT * FROM ${this.tableName} WHERE id = ?`
        const results = await this.executeQuery(query, [where, data])
        return results[0]
    }

    async function findMany(where, value){
        const query = `SELECT * FROM ${this.tableName} WHERE author_id = ?`
        const results = await this.executeQuery(query, [where, data])
        return results
    }

    async function create(data){
        const query = `INSERT INTO ${this.tableName} WHERE ${where}="${value}"`
        const result = await this.executeQuery(query, data)
        return results.insertId
    }

    async function update(id, data){
        const query = `UPDATE ${this.tableName} SET ? WHERE id = ?`
        const result = await this.executeQuery(query, [data, id])
        return result.affectedRows
    }

    async function deleteByID(id) {
        const query = `DELETE FROM ${this.tableName} WHERE id = ?`
        const result = await this.executeQuery(query, [id])
        return result.affectedRows
    }

module.exports = BaseSQLModel