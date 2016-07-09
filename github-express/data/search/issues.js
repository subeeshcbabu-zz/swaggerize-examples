'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /search/issues
 */
module.exports = {
    /**
     * summary: 
     * description: Find issues by state and keyword. (This method returns up to 100 results per page.)
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
                path: '/search/issues',
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
                path: '/search/issues',
                operation: 'get',
                response: '403'
            }, callback);
        }
    }
};
