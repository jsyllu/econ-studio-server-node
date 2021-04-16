const quizzesSchema = require('./quizzes-schema')
const mongoose = require('mongoose')
const quizzesModel = mongoose.model("QuizModel", quizzesSchema)

module.exports = quizzesModel