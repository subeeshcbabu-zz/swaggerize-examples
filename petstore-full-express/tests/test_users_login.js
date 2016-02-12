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

    
    t.test('test get /users/login', function (t) {
        
        var responseSchema = enjoi({
            'type': "string"
        }, {
          '#':  require(Path.join(__dirname, './../config/petstore-full.json')) 
        });
        

        request(app).get('/v2/users/login')
        .end(function (err, res) {
            t.ok(!err, 'get /users/login no error.');
            
            t.strictEqual(res.statusCode, 200, 'get /users/login 200 status.');
            responseSchema.validate(res.body, function (error) {
                t.ok(!error, 'Response schema valid.');
            });
            t.end();
        });
    });
    

});
