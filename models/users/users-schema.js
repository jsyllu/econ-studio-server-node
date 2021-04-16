const mongoose = require('mongoose')
const usersSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    password: String
}, {collection: 'users'})

module.exports = usersSchema