var bcrypt = require('bcryptjs')
var {check, validationResult} = require('express-validator')
var User = require('../models/User')

const regValidators = [
    check('email', 'Некорректный email').isEmail(),
    check('password', 'Минимальная длина пароля 6 символов')
        .isLength({min: 6})]

async function Registration(req, res) {
    try {
        var {email, password} = req.body

        var errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректные данные при регистрации'
            })
        }

        var candidate = await User.findOne({email})
        if (candidate) {
            res.status(400).json({message: 'Такой пользователь уже существует'})
        }

        var hashedPass = await bcrypt.hash(password, 12)
        var user = new User({email, password: hashedPass})
        await user.save();
        res.redirect('/');
        //res.status(201).json({message: 'Пользователь успешно создан'})

    } catch (e) {
        res.json(e);
        //console.log(e);
        //res.redirect('/error');
        //res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
}

module.exports = {Registration, regValidators};