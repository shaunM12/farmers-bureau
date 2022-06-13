const jwt = require('jsonwebtoken')
const secret = process.env.SECRET

module.exports =  tokenAccess => async (req, res, next) => {
    // let tokenAccess;

    const id = req.params.id
    // console.log(id)
    const tokenAccess = jwt.sign({ id: id}, secret)
    console.log(token)
    // const decoded = jwt.decode(tokenAccess, {complete: true})
    res.cookie('tokenAccess', tokenAccess)
    
    req.userId = tokenAccess
    // res.cookie = tokenAccess
    next()
}
