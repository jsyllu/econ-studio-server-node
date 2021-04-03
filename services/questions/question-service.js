const questions = require('./questions.json')

const createQuestion = () => {

}
const createQuestionForQuiz = (qzid, question) => {
    question.quizId = qzid
    questions.add(question)
}
const findAllQuestions = () => {
    return questions
}
const findQuestionsForQuiz = (qzid) => {
    return questions.filter((question) => {
        return (question.quizId === qzid)
    })
}
const findQuestionById = (qsid) => {
    return questions.find((q) => {
        return (q._id === qsid)
    })
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