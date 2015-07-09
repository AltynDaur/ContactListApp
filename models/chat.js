var mongoose = require('mongoose');
var UserSchema = require('./user');
var MessageSchema = require('./message');

var chatSchema = module.exports = new mongoose.Schema({
    name: String,
    userId: [{type: mongoose.Types.ObjectId, ref: UserSchema}],
    messages:[{type: mongoose.Types.ObjectId, ref: MessageSchema}]
});