module.exports = (app) => {
    const usersModel = require('../models/users/users-model')

    const register = (req, res) => {
        const user = req.body
        // TODO: move to service
        usersModel.create(user)
            .then((actualUser) => {
                req.session['currentUser'] = actualUser
                req.send(actualUser)
            })
    }
    const login = (req, res) => {
    const user = req.body
        usersModel.find({
            username: user.username,
            password: user.password
        }).then((actualUser) => {
            if (actualUser) {
                req.session.currentUser = actualUser
                res.send(actualUser)
            } else {
                res.send(403)
            }
        })
    }
    const logout = (req, res) => {
        req.session.destroy()
    }
    const profile = (req, res) => {
        const currUser = req.session.currentUser
        // TODO: handle null failure
        if (currUser) {
            res.send(currUser)
        } else {
            res.send(403)
        }
    }

    app.post('/api/register', register)
    app.post('/api/login', login)
    app.post('/api/logout', logout)
    app.post('/api/profile', profile)
}