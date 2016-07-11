'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /artists/{id}/albums
 */
module.exports = {
    /**
     * summary: 
     * description: [Get an Artist&#39;s Albums](https://developer.spotify.com/web-api/get-artists-albums/)

     * parameters: id, limit, offset, album_type, market
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
                path: '/artists/{id}/albums',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
