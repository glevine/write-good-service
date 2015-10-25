#!/usr/bin/env node

var restify, server;

restify = require('restify');

server = restify.createServer({
    name: 'write-good-service',
    version: '0.0.1'
});

server.use(restify.acceptParser('json'));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.pre(function(req, res, next) {
    if (!req.is('json')) {
        next(new restify.NotAcceptableError('application/json is the only acceptable request type'));
    } else {
        next();
    }
});

server.post('/', function(req, res, next) {
    var suggestions, writeGood;

    writeGood = require('write-good');
    suggestions = writeGood(req.body.text);

    res.send({suggestions: suggestions});
    return next();
});

server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
});

module.exports = exports = server;
