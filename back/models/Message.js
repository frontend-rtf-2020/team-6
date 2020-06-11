var {Schema, model} = require('mongoose')

var schema = new Schema({
    conversationId: {type: Number, required: true, unique: true},
    content: {type: String, required: true},
    sender: {type: String, required: true},
    date: {type: Date, required: true},
})

module.exports = model('Message', schema)