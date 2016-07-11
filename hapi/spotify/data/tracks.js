'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /tracks
 */
module.exports = {
    /**
     * summary: 
     * description: [Get Several Tracks](https://developer.spotify.com/web-api/get-several-tracks/)

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
                path: '/tracks',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
