'use strict';
var Mockgen = require('../../../mockgen.js');
/**
 * Operations on /browse/categories/{category_id}/playlists
 */
module.exports = {
    /**
     * summary: 
     * description: [Get a Category&#39;s playlists](https://developer.spotify.com/web-api/get-categorys-playlists/)

     * parameters: category_id, limit, offset, country, Accept
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
                path: '/browse/categories/{category_id}/playlists',
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
                path: '/browse/categories/{category_id}/playlists',
                operation: 'get',
                response: '429'
            }, callback);
        }
    }
};
