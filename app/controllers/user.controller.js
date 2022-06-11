require('dotenv').config()
const db = require('../models')
// const Registration = db.registration
const User = db.user
const bcrypt = require('bcrypt')
const saltRounds = +process.env.SALT
const jwt = require("jsonwebtoken");
const verifyToken = require('../middleware/verifyToken')



exports.create =  async (req, res) => {
    const { username, email, password, repeatPassword } = req.body
    // console.log("password", req.body)
    

    // if (!req.body.username) {
    //     res.status(400).send({ message: "Please fill in username"})
    //     return;
    // }
    if ( username === "" || email === "" || password === "" ) {
        res.send(400).send({ message: 'Please complete form'})
        return;
    }
    const tempUser = await User.findOne({username: username})
    if (tempUser) {
        res.status(400).send({ message: "Please pick another username"})
        return;
    }
    if (password !== repeatPassword) {
        res.send({ message: "Passwords do not match!"})
    } else {
        const salt = bcrypt.genSaltSync(saltRounds)
        const hash = bcrypt.hashSync(password, salt)
        console.log("hash", hash)

        let match = /^\w*\d*$/.test(password)
        if(match) {
            const newUser = new User({
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
            newUser
            .save(newUser)
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating a new user"
                })
            }) 
        
//         } else {
//             message = "Password must be alphanumeric"
//             res.status(400).send({ message: message})
//             return
        }
    }
}

exports.findOne =  async(req, res) => {
    const id = req.params.id
    // console.log("id", id)

    await User.findById(id)
    .then(data => {
        res.send(data)
        if(!data) 
            res.status(404).send({ message: "Could not find user with id " + id })
            return
    })
    .catch(err => {
        res.status(500).send({ message: "Error retrieving user with id= ", id})
        return
    })
}