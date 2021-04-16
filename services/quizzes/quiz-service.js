const quizzesDao = require('../../daos/quizzes-dao')

const createQuizForCourse = (cid) => {

}
const findAllQuizzes = () => {
    return quizzesDao.findAllQuizzes()
}
const findQuizById = (qid) => {
    return quizzesDao.findQuizById(qid)
}
const findQuizzesForCourse = (cid) => {
    return quizzesDao.findQuizzesForCourse(cid)
}
const updateQuiz = (qid) => {

}
const deleteQuiz = (qid) => {

}

module.exports = {
    createQuizForCourse,
    findAllQuizzes,
    findQuizById,
    findQuizzesForCourse,
    updateQuiz,
    deleteQuiz
}