var express = require('express'),
    _ = require('lodash'),
    config = require('./config'),
    jwt = require('jsonwebtoken'),
    userdao = require('./dao/user-dao');

var app = module.exports = express.Router();

function createToken(user) {
    return jwt.sign(_.omit(user, 'password'), config.secret, {expiresInMinutes: 60 * 30});
};

app.post('/users', function (req, res) {
    if (!req.body.username || !req.body.password) {
        return res.status(400).send("You must send the username and the password");
    }
    if (_.find(users, {username: req.body.username})) {
        return res.status(400).send("A user with that username already exists");
    }

    var newUser = _.pick(req.body, 'name', 'password', 'email');
    userdao.addUser(newUser);
    res.status(201).send("User created");
});

app.post('/sessions/create', function (req, res) {
    if (!req.body.username || !req.body.password) {
        return res.status(400).send("You must send the username and the password");
    }

    var user = userdao.getUser(req.body.username, req.body.password);

    if (!user) {
        return res.status(404).send("The user not found");
    }

    if (!user.password === req.body.password) {
        return res.status(401).send("The username or password don't match");
    }

    res.status(201).send({
        id_token: createToken(user)
    });
});