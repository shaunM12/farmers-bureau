const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const secret = process.env.SECRET
const Registration = ("../models/Registration")

async function verifyToken(req, res, next) {
    let {username, password} = req.body
    let verifyToken

    try { 
        if(!username || !password) {
            res.status(404).send({ message: 'Must complete form'})
            return
        } 
        let user;
        user = await Registration.findOne({ username: username})
        if(!user) {
            res.status(404).send({ message: "Username not found"})
            return
        }
        let matchPassword;
        matchPassword = await bcrypt.compareSync(password, user.password)
        if(!matchPassword) {
            res.status(404).send({ message: "Passwords is incorrect"})
            return
        }
        verifyToken = jwt.sign({ id: user.id}, secret)
        res.cookie("verifyToken", verifyToken)
        console.log({verifyToken, user: {id: user.id, username:username}})
        } catch (error) {
            res.status(500).json({ error: error.message})
        }
        res.loggedIn = verifyToken
        next()
    }
