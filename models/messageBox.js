const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageBox = mongoose.model('MessageBox', new Schema({
    _messageBoxId: Schema.Types.ObjectId,
    messageId: Schema.Types.ObjectId,
    userId: Schema.Types.ObjectId
}));

module.exports = MessageBox;