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

    
    t.test('test post /stores/order', function (t) {
        
        var body = {
        };
        
        var responseSchema = enjoi({
            '$ref': "#/definitions/Order"
        }, {
          '#':  require(Path.join(__dirname, './../config/petstore-full.json')) 
        });
        

        request(app).post('/v2/stores/order').send(body)
        .end(function (err, res) {
            t.ok(!err, 'post /stores/order no error.');
            t.strictEqual(res.statusCode, 200, 'post /stores/order 200 status.');
            responseSchema.validate(res.body, function (error) {
                t.ok(!error, 'Response schema valid.');
            });
            t.end();
        });
    });
    

});
