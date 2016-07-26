'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /data
 */
module.exports = {
    /**
     * summary: 
     * description: Returns Analytics report data for a view (profile).
     * parameters: ids, start-date, end-date, metrics, dimensions, filters, max-results, segment, sort, start-index
     * produces: 
     * responses: 200
     * operationId: analytics.data.get
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/data',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
