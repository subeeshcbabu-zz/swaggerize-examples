'use strict';
var Mockgen = require('../../../../mockgen.js');
/**
 * Operations on /repos/{owner}/{repo}/stats/contributors
 */
module.exports = {
    /**
     * summary: 
     * description: Get contributors list with additions, deletions, and commit counts.
     * parameters: owner, repo, X-GitHub-Media-Type, Accept, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-GitHub-Request-Id
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
                path: '/repos/{owner}/{repo}/stats/contributors',
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
                path: '/repos/{owner}/{repo}/stats/contributors',
                operation: 'get',
                response: '403'
            }, callback);
        }
    }
};
