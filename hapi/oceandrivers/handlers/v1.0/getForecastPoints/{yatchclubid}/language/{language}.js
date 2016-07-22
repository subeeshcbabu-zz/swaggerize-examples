'use strict';
var dataProvider = require('../../../../../data/v1.0/getForecastPoints/{yatchclubid}/language/{language}.js');
/**
 * Operations on /v1.0/getForecastPoints/{yatchclubid}/language/{language}
 */
module.exports = {
    /**
     * summary: 
     * description: Get forecast points of a yatchclub&lt;br/&gt;None
     * parameters: yatchclubid, language
     * produces: application/json, text/html
     * responses: 200
     */
    get: function getForecastPoints(req, reply, next) {
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
