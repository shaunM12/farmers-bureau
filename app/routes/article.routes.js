module.exports = app => {

    const articles = require('../controllers/article.controller')
    var router = require('express')(router)

    router.post('/', articles.create)

    router.get('/:id', articles.findOne)

    router.get('/', articles.findAll)

    // router.put('/:id', articles.update)

    // router.delete('/:id', articles.delete)

    // router.delete('/', articles.deleteAll)


    app.use('/articles', router)
}

// const express = require('express')
// const {getArticles, createArticle} = require( '../controllers/article.controller')

// const router = express.Router()

// router.get('/', getArticles)

// router.post('/', createArticle)


// module.exports = router