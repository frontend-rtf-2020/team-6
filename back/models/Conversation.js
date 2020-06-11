var {Schema, model} = require('mongoose')

var schema = new Schema({
    id: {type: Number, required: true, unique: true},
    participants: {type: [String], required: true}
})

module.exports = model('Conversation', schema)