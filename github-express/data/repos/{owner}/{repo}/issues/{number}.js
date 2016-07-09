'use strict';
var Mockgen = require('../../../../mockgen.js');
/**
 * Operations on /repos/{owner}/{repo}/issues/{number}
 */
module.exports = {
    /**
     * summary: 
     * description: Get a single issue
     * parameters: owner, repo, number, X-GitHub-Media-Type, Accept, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-GitHub-Request-Id
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
                path: '/repos/{owner}/{repo}/issues/{number}',
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
                path: '/repos/{owner}/{repo}/issues/{number}',
                operation: 'get',
                response: '403'
            }, callback);
        }
    },
    /**
     * summary: 
     * description: Edit an issue.
Issue owners and users with push access can edit an issue.

     * parameters: owner, repo, number, X-GitHub-Media-Type, Accept, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-GitHub-Request-Id, body
     * produces: 
     * responses: 200, 403
     * operationId: 
     */
    patch: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/repos/{owner}/{repo}/issues/{number}',
                operation: 'patch',
                response: '200'
            }, callback);
        },
        403: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/repos/{owner}/{repo}/issues/{number}',
                operation: 'patch',
                response: '403'
            }, callback);
        }
    }
};
