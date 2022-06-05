const dbConfig = require('../config/db.config')


const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose
db.url = dbConfig.url
db.registereduser = require('./RegisteredUser')(mongoose)

module.exports = db