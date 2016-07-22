'use strict';
var Test = require('tape');
var Hapi = require('hapi');
var Swaggerize = require('swaggerize-hapi');
var Path = require('path');
var Mockgen = require('../../../../data/mockgen.js');
var Parser = require('swagger-parser');
/**
 * Test for /v1.0/getAemetStation/{stationName}/{period}/
 */
Test('/v1.0/getAemetStation/{stationName}/{period}/', function (t) {
    var apiPath = Path.resolve(__dirname, '../../../../config/swagger.json');
    var server;

    Parser.validate(apiPath, function (err, api) {
        t.error(err, 'No parse error');
        t.ok(api, 'Valid swagger api');
        t.test('server', function (t) {
            t.plan(1);
            server = new Hapi.Server();
            server.connection({});
            server.register({
                register: Swaggerize,
                options: {
                    api: apiPath,
                    handlers: Path.join(__dirname, '../../../../handlers')
                }
            }, function (err) {
                t.error(err, 'No error.');
            });
        });
        /**
         * summary: 
         * description: Get data from the aemet stations&lt;br/&gt;None
         * parameters: stationName, period
         * produces: application/json, text/html
         * responses: 200
         */
        t.test('test getAemetStation get operation', function (t) {
            Mockgen().requests({
                path: '/v1.0/getAemetStation/{stationName}/{period}/',
                operation: 'get'
            }, function (err, mock) {
                var options;
                t.error(err);
                t.ok(mock);
                t.ok(mock.request);
                //Get the resolved path from mock request
                //Mock request Path templates({}) are resolved using path parameters
                options = {
                    method: 'get',
                    url: '' + mock.request.path
                };
                if (mock.request.body) {
                    //Send the request body
                    options.payload = mock.request.body;
                } else if (mock.request.formData) {
                    //Send the request form data
                    options.payload = mock.request.formData;
                    //Set the Content-Type as application/x-www-form-urlencoded
                    options.headers = options.headers || {};
                    options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
                }
                // If headers are present, set the headers.
                if (mock.request.headers && mock.request.headers.length > 0) {
                    options.headers = mock.request.headers;
                }
                server.inject(options, function (res) {
                    t.ok(res.statusCode === 200, 'Ok response status');
                    t.end();
                });
            });
        });
    });
});
