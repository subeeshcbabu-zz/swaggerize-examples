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

    
    t.test('test get /stores/order/{orderId}', function (t) {
        
        var responseSchema = enjoi({
            '$ref': "#/definitions/Order"
        }, {
          '#':  require(Path.join(__dirname, './../config/petstore-full.json')) 
        });
        

        request(app).get('/v2/stores/order/helloworld')
        .end(function (err, res) {
            t.ok(!err, 'get /stores/order/{orderId} no error.');
            t.strictEqual(res.statusCode, 200, 'get /stores/order/{orderId} 200 status.');
            responseSchema.validate(res.body, function (error) {
                t.ok(!error, 'Response schema valid.');
            });
            t.end();
        });
    });
    
    t.test('test delete /stores/order/{orderId}', function (t) {
        

        request(app).delete('/v2/stores/order/helloworld')
        .end(function (err, res) {
            t.ok(!err, 'delete /stores/order/{orderId} no error.');
            t.strictEqual(res.statusCode, 400, 'delete /stores/order/{orderId} 400 status.');
            t.end();
        });
    });
    

});
