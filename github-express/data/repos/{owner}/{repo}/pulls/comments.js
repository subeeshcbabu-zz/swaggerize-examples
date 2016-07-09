'use strict';
var Mockgen = require('../../../../mockgen.js');
/**
 * Operations on /repos/{owner}/{repo}/pulls/comments
 */
module.exports = {
    /**
     * summary: 
     * description: List comments in a repository.
By default, Review Comments are ordered by ascending ID.

     * parameters: owner, repo, direction, sort, since, X-GitHub-Media-Type, Accept, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-GitHub-Request-Id
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
                path: '/repos/{owner}/{repo}/pulls/comments',
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
                path: '/repos/{owner}/{repo}/pulls/comments',
                operation: 'get',
                response: '403'
            }, callback);
        }
    }
};
