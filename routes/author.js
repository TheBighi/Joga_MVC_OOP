const express = require('express')
const router = express.Router()

const authorControllerClass = require('../controllers/author')
const authorController = new(authorControllerClass)

router.get('/author/:author_id', authorController.getAuthorById(req, res))

module.exports = router