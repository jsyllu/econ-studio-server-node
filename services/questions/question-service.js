const questionsDao = require('../../daos/questions-dao')

const createQuestion = () => {

}
const createQuestionForQuiz = (qzid, question) => {
    // question.quizId = qzid
    // questions.add(question)
}
const findAllQuestions = () => {
    return questionsDao.findAllQuestions()
}
const findQuestionsForQuiz = (qzid) => {
    return questionsDao.findQuestionsForQuiz(qzid)
}
const findQuestionById = (qsid) => {
    return questionsDao.findQuestionById(qsid)
}
const updateQuestion = (qid) => {

}
const deleteQuestion = (qid) => {

}

module.exports = {
    createQuestion,
    createQuestionForQuiz,
    findAllQuestions,
    findQuestionsForQuiz,
    findQuestionById,
    updateQuestion,
    deleteQuestion
}