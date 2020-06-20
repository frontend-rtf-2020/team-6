var {Schema, model} = require('mongoose')

var schema = new Schema({
    conversationId: {type: Number, required: true},
    content: {type: String, required: true},
    sender: {type: String, required: true},
    receiver: {type: String, required: true},
    date: {type: Date, default: Date.now, required: true}
})

module.exports = model('Message', schema)