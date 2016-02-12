'use strict';

var test = require('tape'),
    path = require('path'),
    express = require('express'),
    jsYaml = require('js-yaml'),
    fs = require('fs'),
    enjoi = require('enjoi'),
    swaggerize = require('swaggerize-express'),
    request = require('supertest');

test('api', function (t) {
    var app = express();

    
    app.use(require('body-parser')());

    app.use(swaggerize({
        api: path.join(__dirname, './../config/petstore-full.json'),
        handlers: path.join(__dirname, '../handlers')
    }));

    
    t.test('test post /users', function (t) {
        
        var body = {
        };
        

        request(app).post('/v2/users').send(body)
        .end(function (err, res) {
            t.ok(!err, 'post /users no error.');
            t.ok(res.statusCode, 'post /users default status.');
            t.end();
        });
    });
    

});
