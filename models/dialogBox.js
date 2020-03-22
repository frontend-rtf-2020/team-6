const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DialogBox = mongoose.model('DialogBox', new Schema({
    messageBoxId: Schema.Types.ObjectId,
    userId: Schema.Types.ObjectId
}));

module.exports = DialogBox;