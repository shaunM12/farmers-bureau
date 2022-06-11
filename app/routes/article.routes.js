module.exports = app => {
    const articles = require('../controllers/article.controller')
    var router = require('express')(router)

    router.post('/', articles.create)




    app.use('/articles', router)
}