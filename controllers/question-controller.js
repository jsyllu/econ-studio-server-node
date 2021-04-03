const questionService = require('../services/questions/question-service')

module.exports = (app) => {
    const findAllQuestions = (req, res) => {
        const questions = questionService.findAllQuestions()
        res.send(questions)
    }
    const findQuestionById = (req, res) => {
        const qid = req.params.qid
        const question = questionService.findQuestionById(qid)
        res.send(question)
    }
    const findQuestionsForQuiz = (req, res) => {
        const qid = req.params.qid
        const questions = questionService.findQuestionsForQuiz(qid)
        res.send(questions)
    }

    app.get('/api/questions', findAllQuestions)
    app.get('/api/questions/:qid', findQuestionById)
    app.get('/api/quizzes/:qid/questions', findQuestionsForQuiz)
}