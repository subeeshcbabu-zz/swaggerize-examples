'use strict';
var Mockgen = require('../../../mockgen.js');
/**
 * Operations on /locations/{location-id}/media/recent
 */
module.exports = {
    /**
     * summary: Get a list of recent media objects from a given location.
     * description: Get a list of recent media objects from a given location.
     * parameters: location-id, min_timestamp, max_timestamp, min_id, max_id
     * produces: 
     * responses: 200
     * operationId: 
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/locations/{location-id}/media/recent',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
