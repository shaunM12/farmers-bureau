const db = require('../models')
// const RegisteredUser = db.user
const Registration = db.registration
const bcrypt = require('bcrypt')
const saltRounds = +process.env.SALT
// const registeredUser = require('../models/RegisteredUser')
const jwt = require("jsonwebtoken");
const { token } = require('morgan');
// const { user } = require('../models')


exports.create = async (req, res) => {
    const { firstName, lastName, username, email, password, repeatPassword } = req.body
    console.log("password", req.body)
    

    if (!req.body.username) {
        res.status(400).send({ message: "Please fill in username"})
        return;
    }
    // if (username === "" || password === "" || email === "") {
    //     res.send(400).send({ message: 'Please complete form'})
    //     return;
    // }
    // const tempUser = await User.findOne({username: username})
    // if (tempUser) {
    //     res.status(400).send({ message: "Please pick another username"})
    //     return;
    // }
    if (password !== repeatPassword) {
        res.send({ message: "Passwords do not match!"})
    } else {
        const salt = bcrypt.genSaltSync(saltRounds)
        const hash = bcrypt.hashSync(password, salt)
        console.log("hash", hash)

        let match = /^\w*\d*$/.test(password)
        if(match) {
            const newRegistration = new Registration({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                username: req.body.username,
                email: req.body.email,
                password: hash
            })
        
            // await newUser.save(function (err) {
            //     if (err) {
            //         console.log(err)
            //     } else {
            //         console.log('user saved')
            //     }
            // })
            newRegistration.save(newRegistration).then(data => {
                res.send(data)
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating a new Registration"
                })
            }) 
        
//         } else {
//             message = "Password must be alphanumeric"
//             res.status(400).send({ message: message})
//             return
        }
    }
}