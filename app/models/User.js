const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const Joi = require('joi')
const passwordComplexity = require('joi-password-complexity')
const secret = process.env.SECRET

const userSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
})

userSchema.methods.generateAuthToken = () => {
    const token = jwt.sign({ _id: this._id}, secret, {
        expiresIn: "7d",
    })
    return token
}

const User = mongoose.model("user", userSchema)

const validate = (data) => {
    const schema = Joi.object({
        firstName: Joi.string().required().min(2).max(20).label("First Name"),
        lastName: Joi.string().required().min(2).max(20).label("Last Name"),
        email: Joi.string().required().label("Email"),
        password: passwordComplexity().required().label("Password"),

    })
    return schema.validate(data)
}

module.exports = { User, validate}


// module.exports = mongoose => {
//     var schema = mongoose.Schema(
//         {
//             // username: {
//             //     type: String,
//             //     required: true,
                
//             // },
//             email: {
//                 type: String,
//                 required: true,
               
//             },
//             password: {
//                 type: String,
              
//             },
//             // administrator: {
//             //     type: Boolean
                
//             // },
//         }
//     )
//     const User = mongoose.model("user", schema)
//     return User
// }
