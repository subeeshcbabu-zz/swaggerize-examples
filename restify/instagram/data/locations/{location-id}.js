'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /locations/{location-id}
 */
module.exports = {
    /**
     * summary: Get information about a location.
     * description: Get information about a location.
     * parameters: location-id
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
                path: '/locations/{location-id}',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
