const express = require('express')
const router = express.Router()
const articleControllerClass = require('../controllers/article.js')

const articleController = new(articleControllerClass)

router.get('/', (req, res) => articleController.getAllArticles(req, res))
router.get('/:slug', articleController.getArticleBySlug)

module.exports = router;