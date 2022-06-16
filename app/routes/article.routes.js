module.exports = app => {

    const multer = require('multer')
    const upload = multer({ dest: 'public'})
    const articles = require('../controllers/article.controller')
    var router = require('express')(router)

    router.post('/', upload.single('image'), articles.create)

    router.get('/:id', articles.findOne)

    router.get('/', articles.findAll)

    router.put('/:id', articles.update)

    router.delete('/:id', articles.delete)

    router.delete('/', articles.deleteAll)


    app.use('/articles', router)
}