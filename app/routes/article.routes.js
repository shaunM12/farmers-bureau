module.exports = app => {

    const articles = require('../controllers/article.controller')
    var router = require('express')(router)

    router.post('/', articles.create)

    router.get('/:id', articles.findOne)

    router.get('/', articles.findAll)

    app.use('/articles', router)
}

