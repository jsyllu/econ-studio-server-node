const mongoose = require('mongoose')
const questionsSchema = require('./questions-shcema')
const questionsModel = mongoose.model('QuestionModel', questionsSchema)

module.exports = questionsModel