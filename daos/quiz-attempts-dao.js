const quizAttemptsModel = require('../models/quiz-attempts/quiz-attempts-model')

const scoreQuiz = (questions) => {
    let correctCount = 0
    questions.forEach(q => q.answer === q.correct ?
        correctCount++ : correctCount)
    return 100 * correctCount / questions.length
}
const findAttemptsForQuiz = (qzid) => {
    return quizAttemptsModel.find({quiz: qzid})
        .populate('quiz', 'title_id')
}
const createAttempt = (qzid, attempt) => {
    return quizAttemptsModel.create({
        _createdAt: new Date().toISOString(),
        quiz: qzid,
        answers: attempt,
        score: scoreQuiz(attempt)
    })
}

module.exports = {scoreQuiz, findAttemptsForQuiz, createAttempt}