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

    
    t.test('test post /users/createWithArray', function (t) {
        
        var body = {
        };
        

        request(app).post('/v2/users/createWithArray').send(body)
        .end(function (err, res) {
            t.ok(!err, 'post /users/createWithArray no error.');
            t.strictEqual(res.statusCode, default, 'post /users/createWithArray default status.');
            t.end();
        });
    });
    

});
