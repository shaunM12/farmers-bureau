module.exports = app => {

    const events = require('../controllers/event.controller')
    var router = require("express")(router)

    router.get('/:id', events.findOne)

    router.post('/', events.create)

    router.get('/', events.findAll)

    router.put('/:id', events.update)

    router.delete('/:id', events.delete)

    router.delete('/', events.delete)




    app.use('/events', router)
}