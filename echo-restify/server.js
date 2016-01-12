'use strict';

var restify = require('restify');
var swaggerize = require('swaggerize-restify');
var path = require('path');

var server = restify.createServer();

server.use(restify.bodyParser());

server.get('/api', function (req, res) {
    res.send(200);
});

swaggerize(server, {
    api: path.resolve('./config/echo.yaml'),
    handlers: path.resolve('./handlers')
});

server.listen(8000, function () {
    server.swagger.api.host = server.address().address + ':' + server.address().port;
});
