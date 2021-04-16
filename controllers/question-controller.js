const questionService = require('../services/questions/question-service')

module.exports = (app) => {
    app.get('/api/questions', (req, res) => {
        questionService.findAllQuestions()
            .then(allQs => res.json(allQs))
    })
    app.get('/api/questions/:qid', (req, res) => {
        const qid = req.params.qid
        questionService.findQuestionById(qid)
            .then(q => res.json(q))
    })
    app.get('/api/quizzes/:qid/questions', (req, res) => {
        const qid = req.params.qid
        questionService.findQuestionsForQuiz(qid)
            .then(q => res.json(q))
    })
}