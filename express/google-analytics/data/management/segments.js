'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /management/segments
 */
module.exports = {
    /**
     * summary: 
     * description: Lists advanced segments to which the user has access.
     * parameters: max-results, start-index
     * produces: 
     * responses: 200
     * operationId: analytics.management.segments.list
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/management/segments',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
