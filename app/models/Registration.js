const mongoose = require('mongoose')


module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            firstName: {
                type: String,
                required: true,
                match: [/^[a-z ,.'-]+$/i, "Must be only letters"]
            },
            lastName: {
                type: String,
                required: true,
                match: [/^[a-z ,.'-]+$/i, "Must be only letters"]
            },
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
                minlength: [5, "Minimum length must be at least 5 letters of numbers"],
            },
            // administrator: {
            //     type: Boolean
                
            // },
        }
    )
    const Registration = mongoose.model("Registration", schema)
    return Registration
}


