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

    

    swaggerize(server, {
        api: path.join(__dirname, './../config/echo.yaml'),
        handlers: path.join(__dirname, '../handlers')
    });

    
    t.test('test get /test-path/{id}', function (t) {
        

        request(server).get('/echo/test-path/{id}')
        .expect(200)
        .end(function (err, res) {
            t.ok(!err, 'get /test-path/{id} no error.');
            t.strictEqual(res.statusCode, 200, 'get /test-path/{id} 200 status.');
            t.end();
        });
    });
    

});
