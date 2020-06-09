var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken')
var bcrypt = require('bcryptjs')
var {check, validationResult} = require('express-validator')
var User = require('..models/User')

// /auth/register
router.post(
    '/register', 
    [
        check('email', 'Некорректный email').isEmail(),
        check('password', 'Минимальная длина пароля 6 символов')
        .isLength({min: 6})
    ],
    async (req, res) => {
    try {
        var errors = validationResult(req)
        if(!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректные данные при регистрации'
            })
        }
        var {email, password} = req.body

        var candidate = await User.findOne({email})
        if(candidate) {
            res.status(400).json({message: 'Такой пользователь уже существует'})
        }

        var hashedPass = await bcrypt.hash(password, 12)
        var user = new User({email, password: hashedPass})
        await user.save()
        res.status(201).json({message: 'Пользователь успешно создан'})

    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова'})
    }
})

// /auth/login
router.post(
    '/login',
    [
        check('email', 'Введите корректный email').normalizeEmail().isEmail(),
        check('password', 'Введите пароль').exists()
    ],
    async (req, res) => {
        try {
            var errors = validationResult(req)
            if(!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректные данные при входе'
                })
            }
            
            var {email, password} = req.body

            var user = await User.findOne({email})

            if(!user) {
                return res.status(400).json({message: 'Такого пользователя не существует'})
            }

            var isMatch = await bcrypt.compare(password, user.password)

            if(!isMatch) {
                return res.status(400).json({message: 'Неверный пароль'})
            }

            var token = jwt.sign(
                { userId: user.id },
                'secretno',
                {expiresIn: '1h'}
            )
                
            res.json({token, userId: user.id})
        } catch (e) {
            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова'})
        }
})


module.exports = router