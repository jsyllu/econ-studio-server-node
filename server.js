const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3001
require('dotenv').config()
const MONGODB_URI = process.env.ATLAS_URI

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const mongoose = require('mongoose')
mongoose.connect(MONGODB_URI,
    // 'mongodb://localhost:27017/econ-studio',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connected to mongodb atlas successfully')
    })
    .catch(err => console.log(err))

const session = require('express-session')
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    // cookie: {secure: true}
}))

// configure CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin')
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS')
    next()
})

require('./controllers/quiz-controller')(app)
require('./controllers/question-controller')(app)
require('./controllers/quiz-attempt-controller')(app)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))