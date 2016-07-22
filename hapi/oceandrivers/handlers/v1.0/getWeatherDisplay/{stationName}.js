'use strict';
var dataProvider = require('../../../data/v1.0/getWeatherDisplay/{stationName}.js');
/**
 * Operations on /v1.0/getWeatherDisplay/{stationName}/
 */
module.exports = {
    /**
     * summary: 
     * description: Get data from the weather display software&lt;br/&gt;None
     * parameters: stationName, period
     * produces: application/json, text/html
     * responses: 200
     */
    get: function getWeatherDisplay(req, reply, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['get']['200'];
        provider(req, reply, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            reply(data && data.responses).code(status);
        });
    }
};
