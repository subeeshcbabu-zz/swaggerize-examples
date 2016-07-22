'use strict';
var Mockgen = require('../../../mockgen.js');
/**
 * Operations on /v1.0/getForecastTimeSeries/{latitude}/{longitude}/
 */
module.exports = {
    /**
     * summary: 
     * description: Get timeseries forecast information&lt;br/&gt;None
     * parameters: latitude, longitude, inittime, endtime, days, hours, weather, wave
     * produces: application/json, text/html
     * responses: 200
     * operationId: getForecastTimeSeries
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/v1.0/getForecastTimeSeries/{latitude}/{longitude}/',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
