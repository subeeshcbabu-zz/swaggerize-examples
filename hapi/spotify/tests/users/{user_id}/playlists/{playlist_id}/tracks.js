'use strict';
var Test = require('tape');
var Hapi = require('hapi');
var Swaggerize = require('swaggerize-hapi');
var Path = require('path');
var Mockgen = require('../../../../../data/mockgen.js');
var Parser = require('swagger-parser');
/**
 * Test for /users/{user_id}/playlists/{playlist_id}/tracks
 */
Test('/users/{user_id}/playlists/{playlist_id}/tracks', function (t) {
    var apiPath = Path.resolve(__dirname, '../../../../../config/swagger.json');
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
                    handlers: Path.join(__dirname, '../../../../../handlers')
                }
            }, function (err) {
                t.error(err, 'No error.');
            });
        });
        /**
         * summary: 
         * description: [Remove Tracks from a Playlist](https://developer.spotify.com/web-api/remove-tracks-playlist/)

         * parameters: user_id, playlist_id, Accept, body
         * produces: 
         * responses: 200, 429
         */
        t.test('test  delete operation', function (t) {
            Mockgen().requests({
                path: '/users/{user_id}/playlists/{playlist_id}/tracks',
                operation: 'delete'
            }, function (err, mock) {
                var options;
                t.error(err);
                t.ok(mock);
                t.ok(mock.request);
                //Get the resolved path from mock request
                //Mock request Path templates({}) are resolved using path parameters
                options = {
                    method: 'delete',
                    url: '/v1' + mock.request.path
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
                    var Validator = require('is-my-json-valid');
                    var validate = Validator(api.paths['/users/{user_id}/playlists/{playlist_id}/tracks']['delete']['responses']['200']['schema']);
                    t.ok(validate(res.result || res.payload), 'Valid response');
                    t.error(validate.errors, 'No validation errors');
                    t.end();
                });
            });
        });/**
         * summary: 
         * description: [Get a Playlist&#39;s Tracks](https://developer.spotify.com/web-api/get-playlists-tracks/)

         * parameters: user_id, playlist_id, limit, offset, fields, market, Accept
         * produces: 
         * responses: 200, 429
         */
        t.test('test  get operation', function (t) {
            Mockgen().requests({
                path: '/users/{user_id}/playlists/{playlist_id}/tracks',
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
                    url: '/v1' + mock.request.path
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
                    var Validator = require('is-my-json-valid');
                    var validate = Validator(api.paths['/users/{user_id}/playlists/{playlist_id}/tracks']['get']['responses']['200']['schema']);
                    t.ok(validate(res.result || res.payload), 'Valid response');
                    t.error(validate.errors, 'No validation errors');
                    t.end();
                });
            });
        });/**
         * summary: 
         * description: [Add Tracks to a Playlist](https://developer.spotify.com/web-api/add-tracks-to-playlist/)

         * parameters: user_id, playlist_id, position, uris, Accept
         * produces: 
         * responses: 200, 429
         */
        t.test('test  post operation', function (t) {
            Mockgen().requests({
                path: '/users/{user_id}/playlists/{playlist_id}/tracks',
                operation: 'post'
            }, function (err, mock) {
                var options;
                t.error(err);
                t.ok(mock);
                t.ok(mock.request);
                //Get the resolved path from mock request
                //Mock request Path templates({}) are resolved using path parameters
                options = {
                    method: 'post',
                    url: '/v1' + mock.request.path
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
                    var Validator = require('is-my-json-valid');
                    var validate = Validator(api.paths['/users/{user_id}/playlists/{playlist_id}/tracks']['post']['responses']['200']['schema']);
                    t.ok(validate(res.result || res.payload), 'Valid response');
                    t.error(validate.errors, 'No validation errors');
                    t.end();
                });
            });
        });/**
         * summary: 
         * description: [Reorder or replace a Playlist&#39;s Tracks](https://developer.spotify.com/web-api/reorder-playlists-tracks/)

         * parameters: user_id, playlist_id, Accept, body
         * produces: 
         * responses: 200, 429
         */
        t.test('test  put operation', function (t) {
            Mockgen().requests({
                path: '/users/{user_id}/playlists/{playlist_id}/tracks',
                operation: 'put'
            }, function (err, mock) {
                var options;
                t.error(err);
                t.ok(mock);
                t.ok(mock.request);
                //Get the resolved path from mock request
                //Mock request Path templates({}) are resolved using path parameters
                options = {
                    method: 'put',
                    url: '/v1' + mock.request.path
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
                    var Validator = require('is-my-json-valid');
                    var validate = Validator(api.paths['/users/{user_id}/playlists/{playlist_id}/tracks']['put']['responses']['200']['schema']);
                    t.ok(validate(res.result || res.payload), 'Valid response');
                    t.error(validate.errors, 'No validation errors');
                    t.end();
                });
            });
        });
    });
});
