const mongoose = require('mongoose')


module.exports = mongoose => {
    var schema = monogoose.Schema(
        {
            username: {
                type: String,
                required: true,
                minlength: [5, "Must be at least 5 letters"],
                match: [/^[\w+\d+/]+/, "Must be alphanumeric"]
            },
            email: {
                type: String,
                required: true,
                match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Must be a valid email"]
            },
            password: {
                type: String,
                required: true,
                minlength: [8, "Minimum length must be at least 8 letters of numbers"],
                match: [/^[\w+\d+/]+/, "Must be alphanumeric"]
            },
            status: {
                enum: ['admininstrator', 'user'],
            }
        }
    )
    const User = mongoose.model("user", schema)
    return User
}


