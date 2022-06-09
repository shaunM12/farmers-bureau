const db = require('../models')
const Login = db.login
const verifyToken = require('../middleware/verifyToken')

exports.userLogin = verifyToken, (req, res, next) => {
    let user = res.user
    console.log(user)
} 