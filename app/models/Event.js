const mongoose = require('mongoose')

module.exports = mongoose => {
    var schema = mongoose.Schema({
        name: String,
        location: String,
        start: String,
        end: String,
        month: String,
        day: String,
        description: String,
        creatorId: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
    })

    const Event = mongoose.model('event', schema)
    return Event
}