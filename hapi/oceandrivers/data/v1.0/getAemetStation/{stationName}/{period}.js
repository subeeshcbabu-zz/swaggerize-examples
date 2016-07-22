'use strict';
var Mockgen = require('../../../mockgen.js');
/**
 * Operations on /v1.0/getAemetStation/{stationName}/{period}/
 */
module.exports = {
    /**
     * summary: 
     * description: Get data from the aemet stations&lt;br/&gt;None
     * parameters: stationName, period
     * produces: application/json, text/html
     * responses: 200
     * operationId: getAemetStation
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/v1.0/getAemetStation/{stationName}/{period}/',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
