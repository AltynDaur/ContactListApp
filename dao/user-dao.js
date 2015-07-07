var mongoose = require('mongoose');
dbURI = 'mongodb://localhost/textogram';
mongoose.connect(dbURI);
var userSchema = new mongoose.Schema({
    name: {type: String, unique: true},
    password: {type: String},
    email: {type: String},
    allChats: [{type: mongoose.Schema.Types.ObjectsId, ref: Chat}]
});
var User = mongoose.model('User',userSchema);

exports.addUser = function(user){
    var newUser = new User({
        name: user.name,
        password: user.password,
        email: user.email
    });
    newUser.save(function(err){
        if(!err){
            console.log('User saved!');
        }
    });
};

exports.getUser = function(name,pass){
    return User.find({name:name,password: pass}, function(err){
        if(!err){
            console.log('User here!');
        }
    });
};