var mongoose = require('mongoose');
var UserSchema = require('./user');
var MessageSchema = require('./message');

var chatSchema = module.exports = new mongoose.Schema({
    userId: [UserSchema],
    messages:[MessageSchema]
});