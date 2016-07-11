'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /artists/{id}/top-tracks
 */
module.exports = {
    /**
     * summary: 
     * description: [Get an Artist&#39;s Top Tracks](https://developer.spotify.com/web-api/get-artists-top-tracks/)

     * parameters: id, country
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
                path: '/artists/{id}/top-tracks',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
