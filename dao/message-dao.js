var mongoose = require('mongoose');

var messageSchema = new mongoose.Schema({
    content: String,
    createdOn: {type:Date, default:Date.now()}
});