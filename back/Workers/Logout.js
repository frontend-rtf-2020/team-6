var bcrypt = require('bcryptjs')
var User = require('../models/User')

async function Logout(req, res, next) {
    if (req.session.user) {
    delete req.session.user;
    res.redirect('/')
    }
}

module.exports = {Logout};