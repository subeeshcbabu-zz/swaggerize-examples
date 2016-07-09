'use strict';
var Mockgen = require('../../../mockgen.js');
/**
 * Operations on /repos/{owner}/{repo}/forks
 */
module.exports = {
    /**
     * summary: 
     * description: List forks.
     * parameters: owner, repo, sort, X-GitHub-Media-Type, Accept, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-GitHub-Request-Id
     * produces: 
     * responses: 200, 403
     * operationId: 
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/repos/{owner}/{repo}/forks',
                operation: 'get',
                response: '200'
            }, callback);
        },
        403: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/repos/{owner}/{repo}/forks',
                operation: 'get',
                response: '403'
            }, callback);
        }
    },
    /**
     * summary: 
     * description: Create a fork.
Forking a Repository happens asynchronously. Therefore, you may have to wai
a short period before accessing the git objects. If this takes longer than 5
minutes, be sure to contact Support.

     * parameters: owner, repo, X-GitHub-Media-Type, Accept, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-GitHub-Request-Id, body
     * produces: 
     * responses: 201, 403
     * operationId: 
     */
    post: {
        201: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/repos/{owner}/{repo}/forks',
                operation: 'post',
                response: '201'
            }, callback);
        },
        403: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/repos/{owner}/{repo}/forks',
                operation: 'post',
                response: '403'
            }, callback);
        }
    }
};
