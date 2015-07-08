var mongoose = require('mongoose');
var ChatSchema = require('./chat');

var userSchema = module.exports= new mongoose.Schema({
    name: {type: String, unique: true},
    password: {type: String},
    email: {type: String},
    allChats: [ChatSchema]
});