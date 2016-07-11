'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /search/users
 */
module.exports = {
    /**
     * summary: 
     * description: Search users.
     * parameters: order, q, sort, X-GitHub-Media-Type, Accept, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-GitHub-Request-Id
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
                path: '/search/users',
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
                path: '/search/users',
                operation: 'get',
                response: '403'
            }, callback);
        }
    }
};
