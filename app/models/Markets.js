const mongoose = require('mongoose')

module.exports = mongoose => {
    var schema = mongoose.Schema({
        where: String,
        days: String,
        time: String,
        location: String,
    })

    const Markets = mongoose.model('markets', schema)
    return Markets
}