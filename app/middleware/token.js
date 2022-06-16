const jwt = require('jsonwebtoken')
const secret = process.env.SECRET
// const token = require('../middleware/verifyToken')
const db = require('../models')
const User = db.user

module.exports = async function token (req, res, next) {
    let tokenAccess;
    
    let email;
    try {
        let user;
        user = await User.findOne(email)
        console.log(44444,user)
        // const id = req.params.id
        // console.log(1212, user.email)
        console.log(28282, user._id)
        console.log(1000, secret)
        tokenAccess = jwt.sign({ id: user._id}, secret)
        console.log(tokenAccess)
        // const decoded = jwt.decode(tokenAccess, {complete: true})
        res.cookie('tokenAccess', tokenAccess)

    } catch (err) {
        console.log(err)
        res.send("error")
    }
    
    // req.userId = tokenAccess
    res.cookie = tokenAccess
    next()
}
