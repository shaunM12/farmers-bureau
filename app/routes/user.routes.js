module.exports = app => {

    const user = require('../controllers/user.controller')
    const express = require('express')
    var router = require('express')(router)
    const mongoose = require('mongoose')
    const verifyToken = require('../middleware/verifyToken')
    const tokenAccess = require('../middleware/token')


    // router.get('/', user.findAll)

    router.post('/', user.findOne)

    // router.post('/', user.create)

    app.use('/user', router)
}
