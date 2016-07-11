'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /albums
 */
module.exports = {
    /**
     * summary: 
     * description: [Get Several Albums](https://developer.spotify.com/web-api/get-several-albums/)

     * parameters: ids, market
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
                path: '/albums',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
