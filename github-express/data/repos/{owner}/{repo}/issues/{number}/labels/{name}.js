'use strict';
var Mockgen = require('../../../../../../mockgen.js');
/**
 * Operations on /repos/{owner}/{repo}/issues/{number}/labels/{name}
 */
module.exports = {
    /**
     * summary: 
     * description: Remove a label from an issue.
     * parameters: owner, repo, number, name, X-GitHub-Media-Type, Accept, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-GitHub-Request-Id
     * produces: 
     * responses: 204, 403
     * operationId: 
     */
    delete: {
        204: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/repos/{owner}/{repo}/issues/{number}/labels/{name}',
                operation: 'delete',
                response: '204'
            }, callback);
        },
        403: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/repos/{owner}/{repo}/issues/{number}/labels/{name}',
                operation: 'delete',
                response: '403'
            }, callback);
        }
    }
};
