const router = require('express').Router()
const { User, validate} = require('../models/User')
const bcrypt = require('bcrypt')
const saltRounds = +process.env.SALT

router.post('/', async (req, res) => {
    try {
        const {error} = validate(req.body)
        const {password} = req.body
        console.log("req.body",req.body)

        if(error) 
        return res.status(400).send({ message: error.details[0].message})

        const user = await User.findOne({ email: req.body.email})
        console.log('user', user)
        if(user) 
            return res.status(409).send({message: "Email already exists!"})
        
            const salt = await bcrypt.genSaltSync(+saltRounds)
            const hashPassword = await bcrypt.hashSync(req.body.password, salt)
        
            await new User({...req.body, password: hashPassword}).save()
            console.log("created")
            return res.status(201).send({message: "User created successfully"})
        
    } catch(error) {
        return res.status(500).send({message: "Internal server error!"})
    }
})


module.exports = router