const quizzesService = require('../services/quizzes/quiz-service')

module.exports = (app) => {
    const findAllQuizzes = (req, res) => {
        const quizzes = quizzesService.findAllQuizzes()
        res.send(quizzes)
    }
    const findQuizById = (req, res) => {
        const qid = req.params.qid
        const quiz = quizzesService.findQuizById(qid)
        res.send(quiz)
    }
    const findQuizzesForCourse = (req, res) => {
        const cid = req.params.cid
        const quizzes = quizzesService.findQuizzesForCourse(cid)
        res.send(quizzes)
    }

    app.get('/api/quizzes', findAllQuizzes)
    app.get('/api/quizzes/:qid', findQuizById)
    app.get('/api/courses/:cid/quizzes', findQuizzesForCourse)
}