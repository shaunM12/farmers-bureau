require('dotenv').config()
const express = require("express")
const cors = require("cors")
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const multer = require('multer')
const upload = multer({ dest: 'public/'})


const app = express()

// var corsOptions = {
//     origin: "http://localhost:8081"
// };

app.use('/public',express.static('public'))

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
require('./routes/article.routes')(app)
require('./routes/event.routes')(app)


// app.get('/public/:imageName', (req, res) => {
//     const imageName = req.params.imageName
//     const readStream = fs.createReadStream(`public/${imageName}`)
//     readStream.pip(res)
// })
// app.post('/articles', upload.single('image'), (req, res) => {
//     const imagePath = req.file.path
//     // const description = req.body.description
//     res.send({ imagePath})
// })

app.listen(8081, () => {
    console.log('The server is running on http://localhost:8081')
})