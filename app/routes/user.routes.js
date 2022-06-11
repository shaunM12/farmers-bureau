module.exports = app => {

    const user = require('../controllers/user.controller')
    const express = require('express')
    var router = require('express')(router)
    const verifyToken = require('../middleware/verifyToken')
    const token = require('../middleware/token')


    // router.get('/', user.findAll)

    router.get('/:id', token, user.findOne)

    router.post('/', token, user.create)

    app.use('/user', router)
}
