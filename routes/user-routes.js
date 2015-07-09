var express = require('express'),
    _ = require('lodash'),
    jwt = require('jsonwebtoken'),
    config  = require('./../config'),
    userdao = require('./../dao/user-dao');

var app = module.exports = express.Router();

function createToken(user) {
    userForToken = _.omit(user, 'password');
    console.log(userForToken);
    return jwt.sign(userForToken, config.secret, {expiresInMinutes: 60 * 30});
};

app.post('/users/register', function (req, res) {
/*    if (!req.body.name || !req.body.password) {
        return res.status(400).send("You must send the username and the password");
    }*/
/*
    if (_.find(users, {name: req.body.name})) {
        return res.status(400).send("A user with that username already exists");
    }
*/
    var newUser = _.pick(req.body, ['name', 'password', 'email']);
    userdao.addUser(newUser);
    res.status(201).send("User created");
});

app.post('/users/login', function (req, res) {


    var user = userdao.getUser(req.body.name, req.body.password);

    if (!user) {
        return res.status(404).send("The user not found");
    }

    if (!user.password === req.body.password) {
        return res.status(401).send("The username or password don't match");
    }

    res.status(201).send(
    {
        id_token: createToken(user)
    });
});

app.get('/users', function(req,res){
    userdao.getUsers(function(users){
        res.send(users);
    });

});
