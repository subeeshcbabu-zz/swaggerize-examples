'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /albums/{id}/tracks
 */
module.exports = {
    /**
     * summary: 
     * description: [Get an Album&#39;s Tracks](https://developer.spotify.com/web-api/get-albums-tracks/)

     * parameters: id, limit, offset, market
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
                path: '/albums/{id}/tracks',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
