'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /users/{user_id}/playlists
 */
module.exports = {
    /**
     * summary: 
     * description: [Get a List of a User&#39;s Playlists](https://developer.spotify.com/web-api/get-list-users-playlists/)

     * parameters: user_id, limit, offset, Accept
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
                path: '/users/{user_id}/playlists',
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
                path: '/users/{user_id}/playlists',
                operation: 'get',
                response: '429'
            }, callback);
        }
    },
    /**
     * summary: 
     * description: [Create a Playlist](https://developer.spotify.com/web-api/create-playlist/)

     * parameters: user_id, Accept, body
     * produces: 
     * responses: 201, 429
     * operationId: 
     */
    post: {
        201: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/users/{user_id}/playlists',
                operation: 'post',
                response: '201'
            }, callback);
        },
        429: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/users/{user_id}/playlists',
                operation: 'post',
                response: '429'
            }, callback);
        }
    }
};
