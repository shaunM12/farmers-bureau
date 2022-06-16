const mongoose = require('mongoose')

module.exports = mongoose => {
    var schema = mongoose.Schema({
        name: String,
        location: String,
        startTime: String,
        endTime: String,
        dateMonth: String,
        dateDay: String,
        description: String,
        sponsoredBy: String,
        creatorId: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
    })

    const Event = mongoose.model('event', schema)
    return Event
}