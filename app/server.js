const express = require("express")
const cors = require("cors")
var logger = require('morgan')

const app = express()

// var corsOptions = {
//     origin: "http://localhost:8081"
// };


app.use(cors())

// parse requests of content-type - application/json
app.use(express.json())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))



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

require('./routes/user.routes')(app)


app.listen(8080, () => {
    console.log('The server is running on http://localhost:8085')
})