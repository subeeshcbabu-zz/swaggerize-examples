'use strict';
var Mockgen = require('../../../../../mockgen.js');
/**
 * Operations on /users/{user_id}/playlists/{playlist_id}/followers/contains
 */
module.exports = {
    /**
     * summary: 
     * description: [Check if Users Follow a Playlist](https://developer.spotify.com/web-api/check-user-following-playlist/)

     * parameters: user_id, playlist_id, ids
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
                path: '/users/{user_id}/playlists/{playlist_id}/followers/contains',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
