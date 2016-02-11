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

    

    app.use(swaggerize({
        api: path.join(__dirname, './../config/petstore-full.json'),
        handlers: path.join(__dirname, '../handlers')
    }));

    
    t.test('test get /users/logout', function (t) {
        

        request(app).get('/v2/users/logout')
        .end(function (err, res) {
            t.ok(!err, 'get /users/logout no error.');
            t.strictEqual(res.statusCode, default, 'get /users/logout default status.');
            t.end();
        });
    });
    

});
