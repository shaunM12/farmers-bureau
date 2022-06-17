const router = require('express').Router()
const {User} = require('../models/User')



exports.create = async (req, res) => {

    const {email} = req.params.email
    const user = User.findOne({email: email})
    try {
    if(!user) 
        return res.status(401).send({message: "Invalid Email"})

    let validPassword;
    validPasssword = await bcrypt.compare(req.body.password, user.password)

    if(!validPassword)
    return res.status(401).send({message: "Invalid password"})

    const token = user.generateAuthToken()
    res.cookies("accessToken", accessToken)
    res.status(200).send({ data: tokenAccess, message: "Logged in successfully"})
    }
    catch (error) {
        res.status(500).send({message: "Internal server error!"})
    }
}