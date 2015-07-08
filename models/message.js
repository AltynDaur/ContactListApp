var mongoose = require('mongoose');

var messageSchema = module.exports = new mongoose.Schema({
    content: String,
    createdOn: {type:Date, default:Date.now()}
});