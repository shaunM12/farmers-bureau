require('dotenv').config()
const express = require("express")
const cors = require("cors")
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')



const app = express()

const userRoutes = require('./routes/users')
const authRoutes = require('./routes/auth')

app.use(cors())

// parse requests of content-type - application/json
app.use(express.json({limit: "10000kb", extended: true}))
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ limit: "10000kb", extended: true }))



const db = require('./models')
db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to the database!')
})
.catch(err => {
    console.log("Cannot connect to the database!", err)
    process.exit()
})

// simple route
app.get("/", (req, res) => {
    res.json({Message: "Welcome to Farm & Food Magazine"})
});

require('./routes/article.routes')(app)
require('./routes/event.routes')(app)
require('./routes/auth.routes')
require('./routes/markets.routes')(app)

app.use('/users', userRoutes)
app.use('/auth', authRoutes)

app.listen(8081, () => {
    console.log('The server is running on http://localhost:8081')
})