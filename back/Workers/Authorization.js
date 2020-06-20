var bcrypt = require('bcryptjs')
var {check, validationResult} = require('express-validator')
var User = require('../models/User')
var userEmailLogin;
const authValidators = [
    //check('email', 'Введите корректный email').normalizeEmail().isEmail(),
    check('password', 'Введите пароль').exists()]

async function Authorization(req, res) {
    try {
        console.log(req.session.user);
        if (req.session.user) return res.redirect('/')

        var errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректные данные при входе'
            })
        }

        var {email, password} = req.body

        userEmailLogin = await User.findOne({$or : [{ email: email}, {login: email}]})

        if (!userEmailLogin) {
            return res.status(400).json({message: 'Такого пользователя не существует'})
        }

        var isMatch = await bcrypt.compare(password, userEmailLogin.password)

        if (!isMatch) {
            return res.status(400).json({message: 'Неверный пароль'})
        }
        req.session.user = {id: userEmailLogin.password, name: email}
        console.log(req.session.user);
        console.log('Вход успешен');
        res.redirect('/')
        //res.status(201).json({message: 'Вход успешен'})
    } catch (e) {
        res.json(e);
    }
}

module.exports = {Authorization, authValidators};