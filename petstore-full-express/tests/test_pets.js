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


    t.test('test post /pets', function (t) {

        var body = {
            'name': "helloworld"
        };


        request(app).post('/v2/pets').send(body)
        .end(function (err, res) {
            t.ok(!err, 'post /pets no error.');

            t.strictEqual(res.statusCode, 405, 'post /pets 405 status.');
            t.end();
        });
    });

    t.test('test put /pets', function (t) {

        var body = {
            'name': "helloworld"
        };


        request(app).put('/v2/pets').send(body)
        .end(function (err, res) {
            t.ok(!err, 'put /pets no error.');

            t.strictEqual(res.statusCode, 400, 'put /pets 400 status.');
            t.end();
        });
    });


});
