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

    
    t.test('test get /pets/{petId}', function (t) {
        
        var responseSchema = enjoi({
            '$ref': "#/definitions/Pet"
        }, {
          '#':  require(Path.join(__dirname, './../config/petstore-full.json')) 
        });
        

        request(app).get('/v2/pets/1')
        .end(function (err, res) {
            t.ok(!err, 'get /pets/{petId} no error.');
            t.strictEqual(res.statusCode, 200, 'get /pets/{petId} 200 status.');
            responseSchema.validate(res.body, function (error) {
                t.ok(!error, 'Response schema valid.');
            });
            t.end();
        });
    });
    
    t.test('test post /pets/{petId}', function (t) {
        

        request(app).post('/v2/pets/helloworld')
        .end(function (err, res) {
            t.ok(!err, 'post /pets/{petId} no error.');
            t.strictEqual(res.statusCode, 405, 'post /pets/{petId} 405 status.');
            t.end();
        });
    });
    
    t.test('test delete /pets/{petId}', function (t) {
        

        request(app).delete('/v2/pets/1')
        .end(function (err, res) {
            t.ok(!err, 'delete /pets/{petId} no error.');
            t.strictEqual(res.statusCode, 400, 'delete /pets/{petId} 400 status.');
            t.end();
        });
    });
    

});
