var bcrypt = require('bcryptjs')
var {check, validationResult} = require('express-validator')
var User = require('../models/User')
var nodemailer = require('nodemailer')
var xoauth2 = require('xoauth2');

var smtpTransport = nodemailer.createTransport({
    host: 'smtp.yandex.ru',
      port: 465,
      secure: true, // true for 465, false for other ports 587
    auth: {
            user: "team.messenged@yandex.ru",
            pass: "T4XwJDSjS5rvYpF",
    }
});
//T4XwJDSjS5rvYpF
//BuFiz3rYzMyMMhp
//9fW2dDCxEp6iczd  - gugol
var rand,mailOptions,host,link;

const regValidators = [
    check('email', 'Некорректный email').isEmail(),
    check('password', 'Минимальная длина пароля 6 символов')
        .isLength({min: 6})]

async function Registration(req, res) {
    try {
        var {email, password, login} = req.body
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
        //var hashedMail = await bcrypt.hash(mail, 12)
        var user = new User({login, email, password: hashedPass})
        await user.save();

        //rand=Math.floor((Math.random() * 100) + 54);
        link="http://localhost:8000/verify?id="+hashedPass;
        mailOptions={
            from: "messengedteam@yandex.ru",
            to : email,
            subject : "Подтверждение аккаунта",
            html : "Здравствуйте,<br> Нажмите на ссылку для подтверждения аккаунта.<br><a href="+link+">Нажмите сюда для подтверждения</a>" 
        }
        console.log(mailOptions);
        smtpTransport.sendMail(mailOptions, function(error, response){
         if(error){
                console.log(error);
            res.end("error");
         }else{
                console.log("Message sent: " + response.message);
            res.end("sent");
             }
    });

        res.redirect('/');

        //res.status(201).json({message: 'Пользователь успешно создан'})

    } catch (e) {
        res.json(e);
        //console.log(e);
        //res.redirect('/error');
        //res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
}

module.exports = {Registration, regValidators, rand, mailOptions, host, link};