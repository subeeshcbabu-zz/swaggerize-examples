'use strict';
var dataProvider = require('../../../../data/v1.0/getForecastTimeSeries/{latitude}/{longitude}.js');
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
     */
    get: function getForecastTimeSeries(req, reply, next) {
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
