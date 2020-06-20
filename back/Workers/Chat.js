var Message = require('../models/Message')


async function Chat(req, res) {
    try {
        console.log(req.session.user);

        var {message, receiver} = req.body

        var mess = new Message({
            conversationId: 1,
            content: message,
            sender: req.session.user.name,
            receiver: receiver,
         })
        mess.save();

        console.log('Сообщение отправлено');
        res.redirect('/')
        //res.status(201).json({message: 'Вход успешен'})
    } catch (e) {
        res.json(e);
    }
}

module.exports = {Chat};