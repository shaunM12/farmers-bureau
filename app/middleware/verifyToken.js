const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const secret = process.env.SECRET
const User = ("../models/User")

async function verifyToken(req, res, next) {
    let {username, email, password} = req.body
    let verifyToken
    

    try { 
        if(!username || !email || !password ) {
            res.status(404).send({ message: 'Must complete form'})
            return
        } 
        let user;
        user = await User.findOne({ username: username})
        if(!user) {
            res.status(404).send({ message: "email not found"})
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
        console.log({verifyToken, user: {id: user.id, email:email}})
        } catch (error) {
            res.status(500).json({ error: error.message})
        }
        res.loggedIn = verifyToken
        res.user = user
        next()
    }
