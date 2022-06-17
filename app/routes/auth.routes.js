module.exports = app => {

    const auth = require('../controllers/auth.controller')
    var router = require('express')(router)

    router.post('/', auth.create)



    app.use('/auth', router)


}