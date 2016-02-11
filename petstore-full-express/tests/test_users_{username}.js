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

    
    t.test('test get /users/{username}', function (t) {
        
        var responseSchema = enjoi({
            '$ref': "#/definitions/User"
        }, {
          '#':  require(Path.join(__dirname, './../config/petstore-full.json')) 
        });
        

        request(app).get('/v2/users/helloworld')
        .end(function (err, res) {
            t.ok(!err, 'get /users/{username} no error.');
            t.strictEqual(res.statusCode, 200, 'get /users/{username} 200 status.');
            responseSchema.validate(res.body, function (error) {
                t.ok(!error, 'Response schema valid.');
            });
            t.end();
        });
    });
    
    t.test('test put /users/{username}', function (t) {
        
        var body = {
        };
        

        request(app).put('/v2/users/helloworld').send(body)
        .end(function (err, res) {
            t.ok(!err, 'put /users/{username} no error.');
            t.strictEqual(res.statusCode, 400, 'put /users/{username} 400 status.');
            t.end();
        });
    });
    
    t.test('test delete /users/{username}', function (t) {
        

        request(app).delete('/v2/users/helloworld')
        .end(function (err, res) {
            t.ok(!err, 'delete /users/{username} no error.');
            t.strictEqual(res.statusCode, 400, 'delete /users/{username} 400 status.');
            t.end();
        });
    });
    

});
