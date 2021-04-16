const usersSchema = require('./users-schema')
const mongoose = require('mongoose')
const usersModel = mongoose.model('UserModel', usersSchema)

module.exports = usersModel