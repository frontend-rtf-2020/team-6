var bcrypt = require('bcryptjs')
var User = require('../models/User')

async function Logout(req, res, next) {
    if (req.session.user) {
    req.session = null;   
    res.redirect('/')
    }
    else {
        res.redirect('/')
    }
}

module.exports = {Logout};