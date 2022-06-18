module.exports = app => {
    const markets = require('../controllers/markets.controller')
    var router = require('express')(router)

    router.post('/', markets.create)

    router.get('/', markets.findAll)

    router.delete('/:id', markets.delete)

    router.put('/:id', markets.update)

    app.use('/markets', router)
}