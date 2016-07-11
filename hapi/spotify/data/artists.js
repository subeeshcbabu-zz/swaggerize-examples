'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /artists
 */
module.exports = {
    /**
     * summary: 
     * description: [Get Several Artists](https://developer.spotify.com/web-api/get-several-artists/)

     * parameters: ids
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
                path: '/artists',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
