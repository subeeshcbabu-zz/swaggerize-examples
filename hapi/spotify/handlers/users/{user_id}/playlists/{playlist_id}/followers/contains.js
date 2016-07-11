'use strict';
var dataProvider = require('../../../../../../data/users/{user_id}/playlists/{playlist_id}/followers/contains.js');
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
     */
    get: function (req, reply, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['get']['200'];
        provider(req, reply, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            reply(data && data.responses).code(status);
        });
    }
};
