const dbConfig = require('../config/db.config')


const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose
db.url = dbConfig.url
// db.user = require('./User')(mongoose)
db.articles = require('./Article')(mongoose)
db.events = require('./Event')(mongoose)


module.exports = db