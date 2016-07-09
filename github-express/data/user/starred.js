'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /user/starred
 */
module.exports = {
    /**
     * summary: 
     * description: List repositories being starred by the authenticated user.
     * parameters: direction, sort, X-GitHub-Media-Type, Accept, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-GitHub-Request-Id
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
                path: '/user/starred',
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
                path: '/user/starred',
                operation: 'get',
                response: '403'
            }, callback);
        }
    }
};
