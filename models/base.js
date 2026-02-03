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