const db = require('../models')
const User = db.user
const bcrypt = require('bcrypt')
const saltRounds = +process.env.SALT
const registeredUser = require('../models/RegisteredUser')
const jwt = require("jsonwebtoken");
const { token } = require('morgan');
const { user } = require('../models')


exports.create = async (req, res) => {
    const { username, email, password, repeatPassword } = req.body

    if (username === "" || password === "" || email === "") {
        res.send(400).send({ message: 'Please complete form'})
        return;
    }
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

        let match = /^\w*\d*$/.test(password)
        if(match) {
            const newUser = new RegisteredUser({
                username: username,
                email: email,
                password: hash
            })
        
            await newUser.save(function (err) {
                if (err) {
                    console.log(err)
                } else {
                    console.log('user saved')
                }
            })
        
        
        } else {
            message = "Password must be alphanumeric"
            res.status(400).send({ message: message})
            return
        }
    }
}