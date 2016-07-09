'use strict';
var Mockgen = require('../../../../../mockgen.js');
/**
 * Operations on /repos/{owner}/{repo}/commits/{ref}/status
 */
module.exports = {
    /**
     * summary: 
     * description: Get the combined Status for a specific Ref
The Combined status endpoint is currently available for developers to preview. During the preview period, the API may change without advance notice. Please see the blog post for full details.
To access this endpoint during the preview period, you must provide a custom media type in the Accept header:
application/vnd.github.she-hulk-preview+json

     * parameters: owner, repo, ref, X-GitHub-Media-Type, Accept, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-GitHub-Request-Id
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
                path: '/repos/{owner}/{repo}/commits/{ref}/status',
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
                path: '/repos/{owner}/{repo}/commits/{ref}/status',
                operation: 'get',
                response: '403'
            }, callback);
        }
    }
};
