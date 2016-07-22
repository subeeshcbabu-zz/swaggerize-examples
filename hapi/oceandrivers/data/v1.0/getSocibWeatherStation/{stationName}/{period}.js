'use strict';
var Mockgen = require('../../../mockgen.js');
/**
 * Operations on /v1.0/getSocibWeatherStation/{stationName}/{period}/
 */
module.exports = {
    /**
     * summary: 
     * description: Get data from the socib bahia de palma buoy&lt;br/&gt;None
     * parameters: stationName, period
     * produces: application/json, text/html
     * responses: 200
     * operationId: getSocibWeatherStation
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/v1.0/getSocibWeatherStation/{stationName}/{period}/',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
