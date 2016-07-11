'use strict';
var Mockgen = require('../../../../mockgen.js');
/**
 * Operations on /users/{user_id}/playlists/{playlist_id}/tracks
 */
module.exports = {
    /**
     * summary: 
     * description: [Remove Tracks from a Playlist](https://developer.spotify.com/web-api/remove-tracks-playlist/)

     * parameters: user_id, playlist_id, Accept, body
     * produces: 
     * responses: 200, 429
     * operationId: 
     */
    delete: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/users/{user_id}/playlists/{playlist_id}/tracks',
                operation: 'delete',
                response: '200'
            }, callback);
        },
        429: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/users/{user_id}/playlists/{playlist_id}/tracks',
                operation: 'delete',
                response: '429'
            }, callback);
        }
    },
    /**
     * summary: 
     * description: [Get a Playlist&#39;s Tracks](https://developer.spotify.com/web-api/get-playlists-tracks/)

     * parameters: user_id, playlist_id, limit, offset, fields, market, Accept
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
                path: '/users/{user_id}/playlists/{playlist_id}/tracks',
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
                path: '/users/{user_id}/playlists/{playlist_id}/tracks',
                operation: 'get',
                response: '429'
            }, callback);
        }
    },
    /**
     * summary: 
     * description: [Add Tracks to a Playlist](https://developer.spotify.com/web-api/add-tracks-to-playlist/)

     * parameters: user_id, playlist_id, position, uris, Accept
     * produces: 
     * responses: 200, 429
     * operationId: 
     */
    post: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/users/{user_id}/playlists/{playlist_id}/tracks',
                operation: 'post',
                response: '200'
            }, callback);
        },
        429: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/users/{user_id}/playlists/{playlist_id}/tracks',
                operation: 'post',
                response: '429'
            }, callback);
        }
    },
    /**
     * summary: 
     * description: [Reorder or replace a Playlist&#39;s Tracks](https://developer.spotify.com/web-api/reorder-playlists-tracks/)

     * parameters: user_id, playlist_id, Accept, body
     * produces: 
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
                path: '/users/{user_id}/playlists/{playlist_id}/tracks',
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
                path: '/users/{user_id}/playlists/{playlist_id}/tracks',
                operation: 'put',
                response: '429'
            }, callback);
        }
    }
};
