require('dotenv').config()
const mongoose = require("mongoose")
const db = require('../models')
// const Registration = db.registration
const User = db.user
const bcrypt = require('bcrypt')
const saltRounds = +process.env.SALT
const jwt = require("jsonwebtoken");
// const verifyToken = require('../middleware/verifyToken')
const token = require('../middleware/token')



exports.create =  async (req, res,) => {
    const {  email, password } = req.body
    console.log("new", req.body)
    
    let tempUser = await User.findOne({email: email})
    if (tempUser) {
        res.json("Please pick another email")
    } else {
        const salt = bcrypt.genSaltSync(saltRounds)
        const hash = bcrypt.hashSync(password, salt)
        // console.log("hash", hash)

        // let match = /^\w*\d*$/.test(password)
        // if(match) {
            const newUser = new User({
                username: req.body.username,
                email: req.body.email,
                // password: hash
                
            })
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
        }
    }

// exports.findOne =  token, async  (req, res, next) =>  {
//     console.log(3333, req.body)
//     const id = req.params.id
//     const email = req.params.email
    
//     // console.log("id", id)
//     const cookie = res.cookie
//     console.log(5555, cookie)
//     console.log(req.body)

//     User.findOne(email)
//     .then(data => {
//         console.log(email)
//         if(!data) {
//             res.send("Could not find user with id ")
//         } else {
//             console.log(data)
//             res.send(data)
//         }
//     })
//     .catch(err => {
//         res.send( "Error retrieving user")
//     })
// }