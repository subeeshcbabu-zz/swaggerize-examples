'use strict';
var Test = require('tape');
var Express = require('express');
var BodyParser = require('body-parser');
var Swaggerize = require('swaggerize-express');
var Path = require('path');
var Request = require('supertest');
var Mockgen = require('../../../../data/mockgen.js');
var Parser = require('swagger-parser');
/**
 * Test for /teams/{teamId}/members/{username}
 */
Test('/teams/{teamId}/members/{username}', function (t) {
    var apiPath = Path.resolve(__dirname, '../../../../config/swagger.json');
    var App = Express();
    App.use(BodyParser.json());
    App.use(BodyParser.urlencoded({
         "extended": true
    }));
    App.use(Swaggerize({
        api: apiPath,
        handlers: Path.resolve(__dirname, '../../../../handlers')
    }));
    Parser.validate(apiPath, function (err, api) {
        t.error(err, 'No parse error');
        t.ok(api, 'Valid swagger api');
        /**
         * summary: 
         * description: The &#34;Remove team member&#34; API is deprecated and is scheduled for removal in the next major version of the API. We recommend using the Remove team membership API instead. It allows you to remove both active and pending memberships.

Remove team member.
In order to remove a user from a team, the authenticated user must have &#39;admin&#39;
permissions to the team or be an owner of the org that the team is associated
with.
NOTE This does not delete the user, it just remove them from the team.

         * parameters: teamId, username, X-GitHub-Media-Type, Accept, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-GitHub-Request-Id
         * produces: 
         * responses: 204, 403
         */
        t.test('test  delete operation', function (t) {
            Mockgen().requests({
                path: '/teams/{teamId}/members/{username}',
                operation: 'delete'
            }, function (err, mock) {
                var request;
                t.error(err);
                t.ok(mock);
                t.ok(mock.request);
                //Get the resolved path from mock request
                //Mock request Path templates({}) are resolved using path parameters
                request = Request(App)
                    .delete('' + mock.request.path);
                if (mock.request.body) {
                    //Send the request body
                    request = request.send(mock.request.body);
                } else if (mock.request.formData){
                    //Send the request form data
                    request = request.send(mock.request.formData);
                    //Set the Content-Type as application/x-www-form-urlencoded
                    request = request.set('Content-Type', 'application/x-www-form-urlencoded');
                }
                // If headers are present, set the headers.
                if (mock.request.headers && mock.request.headers.length > 0) {
                    Object.keys(mock.request.headers).forEach(function (headerName) {
                        request = request.set(headerName, mock.request.headers[headerName]);
                    });
                }
                request.end(function (err, res) {
                    t.error(err, 'No error');
                    t.ok(res.statusCode === 204, 'Ok response status');
                    t.end();
                });
            });
        });/**
         * summary: 
         * description: The &#34;Get team member&#34; API is deprecated and is scheduled for removal in the next major version of the API. We recommend using the Get team membership API instead. It allows you to get both active and pending memberships.

Get team member.
In order to get if a user is a member of a team, the authenticated user mus
be a member of the team.

         * parameters: teamId, username, X-GitHub-Media-Type, Accept, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-GitHub-Request-Id
         * produces: 
         * responses: 204, 403, 404
         */
        t.test('test  get operation', function (t) {
            Mockgen().requests({
                path: '/teams/{teamId}/members/{username}',
                operation: 'get'
            }, function (err, mock) {
                var request;
                t.error(err);
                t.ok(mock);
                t.ok(mock.request);
                //Get the resolved path from mock request
                //Mock request Path templates({}) are resolved using path parameters
                request = Request(App)
                    .get('' + mock.request.path);
                if (mock.request.body) {
                    //Send the request body
                    request = request.send(mock.request.body);
                } else if (mock.request.formData){
                    //Send the request form data
                    request = request.send(mock.request.formData);
                    //Set the Content-Type as application/x-www-form-urlencoded
                    request = request.set('Content-Type', 'application/x-www-form-urlencoded');
                }
                // If headers are present, set the headers.
                if (mock.request.headers && mock.request.headers.length > 0) {
                    Object.keys(mock.request.headers).forEach(function (headerName) {
                        request = request.set(headerName, mock.request.headers[headerName]);
                    });
                }
                request.end(function (err, res) {
                    t.error(err, 'No error');
                    t.ok(res.statusCode === 204, 'Ok response status');
                    t.end();
                });
            });
        });/**
         * summary: 
         * description: The API (described below) is deprecated and is scheduled for removal in the next major version of the API. We recommend using the Add team membership API instead. It allows you to invite new organization members to your teams.

Add team member.
In order to add a user to a team, the authenticated user must have &#39;admin&#39;
permissions to the team or be an owner of the org that the team is associated
with.

         * parameters: teamId, username, X-GitHub-Media-Type, Accept, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-GitHub-Request-Id
         * produces: 
         * responses: 204, 403, 422
         */
        t.test('test  put operation', function (t) {
            Mockgen().requests({
                path: '/teams/{teamId}/members/{username}',
                operation: 'put'
            }, function (err, mock) {
                var request;
                t.error(err);
                t.ok(mock);
                t.ok(mock.request);
                //Get the resolved path from mock request
                //Mock request Path templates({}) are resolved using path parameters
                request = Request(App)
                    .put('' + mock.request.path);
                if (mock.request.body) {
                    //Send the request body
                    request = request.send(mock.request.body);
                } else if (mock.request.formData){
                    //Send the request form data
                    request = request.send(mock.request.formData);
                    //Set the Content-Type as application/x-www-form-urlencoded
                    request = request.set('Content-Type', 'application/x-www-form-urlencoded');
                }
                // If headers are present, set the headers.
                if (mock.request.headers && mock.request.headers.length > 0) {
                    Object.keys(mock.request.headers).forEach(function (headerName) {
                        request = request.set(headerName, mock.request.headers[headerName]);
                    });
                }
                request.end(function (err, res) {
                    t.error(err, 'No error');
                    t.ok(res.statusCode === 204, 'Ok response status');
                    t.end();
                });
            });
        });
    });
});
