'use strict';
var Mockgen = require('../../../../mockgen.js');
/**
 * Operations on /users/{user_id}/playlists/{playlist_id}/followers
 */
module.exports = {
    /**
     * summary: 
     * description: [Unfollow a Playlist](https://developer.spotify.com/web-api/unfollow-playlist/)

     * parameters: user_id, playlist_id
     * produces: text/plain
     * responses: 200
     * operationId: 
     */
    delete: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/users/{user_id}/playlists/{playlist_id}/followers',
                operation: 'delete',
                response: '200'
            }, callback);
        }
    },
    /**
     * summary: 
     * description: [Follow a Playlist](https://developer.spotify.com/web-api/follow-playlist/)

     * parameters: user_id, playlist_id, body
     * produces: text/plain
     * responses: 200
     * operationId: 
     */
    put: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/users/{user_id}/playlists/{playlist_id}/followers',
                operation: 'put',
                response: '200'
            }, callback);
        }
    }
};
