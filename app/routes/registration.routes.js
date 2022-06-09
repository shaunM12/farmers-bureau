module.exports = app => {
    const registration = require('../controllers/registration.controller.js')
    const express = require('express')
    var router = require('express')(router)
    
    
    
    router.post('/', registration.create)





    app.use('/registration', router)
}