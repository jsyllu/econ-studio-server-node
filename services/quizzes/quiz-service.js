const quizzes = require('./quizzes.json')

const createQuizForCourse = (cid) => {

}
const findAllQuizzes = () => {
    return quizzes
}
const findQuizById = (qid) => {
    return quizzes.find((q) => {
        return (q._id === qid)
    })
}
const findQuizzesForCourse = (cid) => {
    return quizzes.filter((q) => {
        return (q.courseId === cid)
    })
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