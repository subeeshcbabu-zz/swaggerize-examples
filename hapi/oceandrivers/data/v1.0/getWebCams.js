'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /v1.0/getWebCams/
 */
module.exports = {
    /**
     * summary: 
     * description: Get forecast and realtime information for known points&lt;br/&gt;None
     * parameters: 
     * produces: application/json, text/html
     * responses: 200
     * operationId: getWebCams
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/v1.0/getWebCams/',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
