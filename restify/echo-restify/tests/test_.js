'use strict';

var test = require('tape'),
    path = require('path'),
    restify = require('restify'),
    enjoi = require('enjoi'),
    jsYaml = require('js-yaml'),
    fs = require('fs'),
    swaggerize = require('swaggerize-restify'),
    request = require('supertest');

test('api', function (t) {
    var server = restify.createServer();

    
    server.use(restify.bodyParser());

    swaggerize(server, {
        api: path.join(__dirname, './../config/echo.yaml'),
        handlers: path.join(__dirname, '../handlers')
    });

    
    t.test('test get /', function (t) {
        

        request(server).get('/echo/')
        .expect(200)
        .end(function (err, res) {
            t.ok(!err, 'get / no error.');
            t.strictEqual(res.statusCode, 200, 'get / 200 status.');
            t.end();
        });
    });
    
    t.test('test post /', function (t) {
        

        request(server).post('/echo/')
        .expect(200)
        .end(function (err, res) {
            t.ok(!err, 'post / no error.');
            t.strictEqual(res.statusCode, 200, 'post / 200 status.');
            t.end();
        });
    });
    

});
