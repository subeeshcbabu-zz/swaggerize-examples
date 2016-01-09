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
        api: path.join(__dirname, './../config/default.yaml'),
        handlers: path.join(__dirname, '../handlers')
    }));

    
    t.test('test get /estimates/time', function (t) {
        
        var responseSchema = enjoi({
            'type': "array", 
            'items': {"$ref":"#/definitions/Product"}
        }, {
          '#':  jsYaml.load(fs.readFileSync(path.join(__dirname, './../config/default.yaml'))) 
        });
        

        request(app).get('/v1/estimates/time')
        .end(function (err, res) {
            t.ok(!err, 'get /estimates/time no error.');
            t.strictEqual(res.statusCode, 200, 'get /estimates/time 200 status.');
            responseSchema.validate(res.body, function (error) {
                t.ok(!error, 'Response schema valid.');
            });
            t.end();
        });
    });
    

});
