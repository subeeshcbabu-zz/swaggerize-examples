'use strict';
var Mockgen = require('../../../mockgen.js');
/**
 * Operations on /users/{user_id}/playlists/{playlist_id}
 */
module.exports = {
    /**
     * summary: 
     * description: [Get a Playlist](https://developer.spotify.com/web-api/get-playlist/)

     * parameters: user_id, playlist_id, fields, market, Accept
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
                path: '/users/{user_id}/playlists/{playlist_id}',
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
                path: '/users/{user_id}/playlists/{playlist_id}',
                operation: 'get',
                response: '429'
            }, callback);
        }
    },
    /**
     * summary: 
     * description: [Change a Playlist&#39;s Details](https://developer.spotify.com/web-api/change-playlist-details/)

     * parameters: user_id, playlist_id, Accept, body
     * produces: text/plain
     * responses: 200, 429
     * operationId: 
     */
    put: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/users/{user_id}/playlists/{playlist_id}',
                operation: 'put',
                response: '200'
            }, callback);
        },
        429: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/users/{user_id}/playlists/{playlist_id}',
                operation: 'put',
                response: '429'
            }, callback);
        }
    }
};
