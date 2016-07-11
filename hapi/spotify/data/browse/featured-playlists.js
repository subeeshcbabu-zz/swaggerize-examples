'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /browse/featured-playlists
 */
module.exports = {
    /**
     * summary: 
     * description: [Get a List of Featured Playlists](https://developer.spotify.com/web-api/get-list-featured-playlists/)

     * parameters: limit, offset, country, locale, timestamp, Accept
     * produces: 
     * responses: 200, 429
     * operationId: 
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/browse/featured-playlists',
                operation: 'get',
                response: '200'
            }, callback);
        },
        429: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/browse/featured-playlists',
                operation: 'get',
                response: '429'
            }, callback);
        }
    }
};
