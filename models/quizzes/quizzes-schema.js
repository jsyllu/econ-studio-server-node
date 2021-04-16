const mongoose = require('mongoose')
const quizzesSchema = mongoose.Schema({
    _id: String,
    title: String,
    courseId: String,
    questions: [{
        // type: mongoose.Schema.Types.ObjectId,
        type: String,
        ref: 'QuestionModel'
    }]
}, {collection: "quizzes"})

module.exports = quizzesSchema