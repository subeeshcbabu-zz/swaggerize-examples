'use strict';

var Test = require('tape'),
    Path = require('path'),
    Hapi = require('hapi'),
    jsYaml = require('js-yaml'),
    fs = require('fs'),
    Enjoi = require('enjoi'),
    Swaggerize = require('swaggerize-hapi');

Test('api', function (t) {
    var server;

    t.test('server', function (t) {
        t.plan(1);

        server = new Hapi.Server();

        server.connection({});

        server.register({
            register: Swaggerize,
            options: {
                api: Path.join(__dirname, './../config/minimal.yaml'),
                handlers: Path.join(__dirname, '../handlers')
            }
        }, function (err) {
            t.error(err, 'No error.');
        });
    });

    
    t.test('test get /minimal', function (t) {
        
        var options = {
            method: 'get',
            url: '/minimal'
        };
        
        server.inject(options, function (res) {
            t.strictEqual(res.statusCode, 200, 'get /minimal 200 status.');
            t.end();
        });
    });
    

});
