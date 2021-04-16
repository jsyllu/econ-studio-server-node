const quizzesService = require('../services/quizzes/quiz-service')

module.exports = (app) => {
    app.get('/api/quizzes', (req, res) => {
        quizzesService.findAllQuizzes()
            .then(quizzes => res.json(quizzes))
    })
    app.get('/api/quizzes/:qzid', (req, res) => {
        const qzid = req.params.qzid
        quizzesService.findQuizById(qzid)
            .then(quiz => res.json(quiz))
    })
    app.get('/api/courses/:cid/quizzes', (req, res) => {
        const cid = req.params.cid
        quizzesService.findQuizzesForCourse(cid)
            .then(quizzes => res.json(quizzes))
    })
}