const mongoose = require('mongoose')
const questionSchema = require('../questions/questions-shcema')
const quizAttempts = mongoose.Schema({
    _createdAt: String,
    score: Number,
    quiz: {type: String, ref: 'QuizModel'},
    answers: [questionSchema]
}, {collection: 'quizAttempts'})

module.exports = quizAttempts