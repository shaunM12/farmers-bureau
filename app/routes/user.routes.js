module.exports = app => {
    const user = require('../controllers/user.controller.js')
    const express = require('express')
    var router = require('express')(router)
    
    
    
    router.post('/', user.create)





    app.use('/api/user', router)
}