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
        api: path.join(__dirname, './../config/petstore-simple.yaml'),
        handlers: path.join(__dirname, '../handlers')
    }));


    t.test('test get /pets', function (t) {

        var responseSchema = enjoi({
            'type': "array",
            'items': {"$ref":"#/definitions/pet"}
        }, {
            subSchemas: {
              '#':  jsYaml.load(fs.readFileSync(path.join(__dirname, './../config/petstore-simple.yaml')))
            }
        });


        request(app).get('/api/pets')
        .end(function (err, res) {
            t.ok(!err, 'get /pets no error.');
            t.strictEqual(res.statusCode, 200, 'get /pets 200 status.');
            responseSchema.validate(res.body, function (error) {
                t.ok(!error, 'Response schema valid.');
            });
            t.end();
        });
    });

    t.test('test post /pets', function (t) {

        var body = {
            'name': "helloworld"
        };

        var responseSchema = enjoi({
            '$ref': "#/definitions/pet"
        }, {
            subSchemas: {
              '#':  jsYaml.load(fs.readFileSync(path.join(__dirname, './../config/petstore-simple.yaml')))
            }
        });


        request(app).post('/api/pets').send(body)
        .end(function (err, res) {
            t.ok(!err, 'post /pets no error.');
            t.strictEqual(res.statusCode, 200, 'post /pets 200 status.');
            responseSchema.validate(res.body, function (error) {
                t.ok(!error, 'Response schema valid.');
            });
            t.end();
        });
    });


});
