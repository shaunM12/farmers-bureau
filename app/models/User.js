const mongoose = require('mongoose')


module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            username: {
                type: String,
                required: true,
                
            },
            email: {
                type: String,
                required: true,
               
            },
            password: {
                type: String,
              
            },
            // administrator: {
            //     type: Boolean
                
            // },
        }
    )
    const User = mongoose.model("user", schema)
    return User
}
