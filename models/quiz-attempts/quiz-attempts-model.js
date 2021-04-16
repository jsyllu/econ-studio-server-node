const mongoose = require('mongoose')
const quizAttemptsSchema = require('./quiz-attempts-schema')
const quizAttemptModel = mongoose.model('QuizAttemptModel', quizAttemptsSchema)

module.exports = quizAttemptModel