const router = require('express').Router()
const { User } = require('../models/User')
const bcrypt = require('bcrypt')
const Joi = require('joi')
const cookieParser = require('cookie-parser')

router.post('/', async (req, res) => {
    console.log("trying to auth")
    console.log(req.body.password)
    try {
        console.log("is it working")
        const { error } = validate(req.body)
        console.log(error)
        if(error) 
        
        return res.status(400).send({ message: error.details[0].message})

        const user = await User.findOne({ email: req.body.email})
        console.log("user",user)
        if(!user) 
        // console('user2', user)
        return res.status(401).send({message: "Invalid Email"})

        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password,
        )
        console.log(req.body.password)
        console.log(user.password)
            if(!validPassword) 
            return res.status(401).send({ message: "Invalid password"})

            const token = user.generateAuthToken()
            res.cookie("token", token)
            res.status(200).send({ data: token, message: "Logged in successfully"})
    } catch(error) {
        res.status(500).send({message: "Sorry unable to validate credentials!"})
    }
})

const validate = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required().label("Email"),
        password: Joi.string().required().label("Password")
    })
    return schema.validate(data)
}

module.exports = router