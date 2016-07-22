'use strict';
var Mockgen = require('../../../../mockgen.js');
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
     * operationId: getForecastPoints
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/v1.0/getForecastPoints/{yatchclubid}/language/{language}',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
