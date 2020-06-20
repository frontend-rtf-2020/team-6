var User = require('../models/User')


async function Search(req, res) {
    try {
        console.log(req.session.user);

        var {name} = req.body

        var user = await User.findOne({$or : [{ email: name}, {login: name}]})
        if (!user) {
            return res.status(400).json({message: 'Такого пользователя не существует'})
        }
        console.log('Пользователь найден')
        res.send(`${user.email} - ${user.login}`);
        //res.redirect('/')
        //res.status(201).json({message: 'Вход успешен'})
    } catch (e) {
        res.json(e);
    }
}

module.exports = {Search};