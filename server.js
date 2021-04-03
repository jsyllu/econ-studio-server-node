const express = require('express')
const app = express()
const port = process.env.PORT || 3001

// configure CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin')
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS')
    next()
})

// const demos = require('./controllers/demo-controller')
// demos(app)

require('./controllers/quiz-controller')(app)
require('./controllers/question-controller')(app)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))