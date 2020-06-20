var {Schema, model} = require('mongoose')

var schema = new Schema({
    login: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    active: {type: Boolean, default: false}
})

module.exports = model('User', schema)