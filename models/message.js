const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Message = mongoose.model('Message', new Schema({
    _messageId: Schema.Types.ObjectId,
    userId: Schema.Types.ObjectId,
    messageBoxId: Schema.Types.ObjectId,
    dateTime: {type: Date, default: Date.now},
    text: String
}));

module.exports = Message;