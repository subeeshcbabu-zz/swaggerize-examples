'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /user/orgs
 */
module.exports = {
    /**
     * summary: 
     * description: List public and private organizations for the authenticated user.
     * parameters: X-GitHub-Media-Type, Accept, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-GitHub-Request-Id
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
                path: '/user/orgs',
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
                path: '/user/orgs',
                operation: 'get',
                response: '403'
            }, callback);
        }
    }
};
