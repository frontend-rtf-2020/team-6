var bcrypt = require('bcryptjs')
var {check, validationResult} = require('express-validator')
var User = require('../models/User')

const authValidators = [
    check('email', 'Введите корректный email').normalizeEmail().isEmail(),
    check('password', 'Введите пароль').exists()]

async function Authorization(req, res) {
    try {
        if (req.session.user) return res.redirect('/')

        var errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректные данные при входе'
            })
        }

        var {email, password} = req.body

        var user = await User.findOne({email})

        if (!user) {
            return res.status(400).json({message: 'Такого пользователя не существует'})
        }

        var isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(400).json({message: 'Неверный пароль'})
        }

        req.session.user = {id: user.id, name: user.password}

    } catch (e) {
        res.json(e);
    }
}

module.exports = {Authorization, authValidators};