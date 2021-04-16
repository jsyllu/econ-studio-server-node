const quizAttemptDao = require('../daos/quiz-attempts-dao')

module.exports = (app) => {
    app.post('/api/quizzes/:qzid/attempts', (req, res) => {
        const qzid = req.params.qzid
        const attempt = req.body
        quizAttemptDao.createAttempt(qzid, attempt)
            .then(attempt => res.json(attempt))
    })
    app.get('/api/quizzes/:qzid/attempts', (req, res) => {
        const qzid = req.params.qzid
        quizAttemptDao.findAttemptsForQuiz(qzid)
            .then(attempts => res.json(attempts))
    })
}