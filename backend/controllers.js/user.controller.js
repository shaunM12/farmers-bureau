const db = require('../models')
const User = db.user
const bcrypt = require('bcrypt')
const saltRounds = +process.env.saltRounds
const User = require('../models/User')
const jwt = require("jsonwebtoken");
const { token } = require('morgan');


exports.create = async (req, res) => {
    const { username, email, password, repeatPassword } = req.body

    if (username === "" || password === "" || email === "") {
        return res.render(400).send({ message: 'Please complete form'})
        
    }
    const tempUser = await User.findOne({username: username})
    if (tempUser) {
        res.status(400).send
    }
}