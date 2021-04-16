const quizzesModel = require('../models/quizzes/quizzes-model')

const findAllQuizzes = () => quizzesModel.find()
const findQuizById = (qzid) => quizzesModel.findById(qzid)
const findQuizzesForCourse = (cid) => quizzesModel.find({courseId: cid})

module.exports = {findAllQuizzes, findQuizById, findQuizzesForCourse}