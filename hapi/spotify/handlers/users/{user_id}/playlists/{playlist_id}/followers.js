'use strict';
var dataProvider = require('../../../../../data/users/{user_id}/playlists/{playlist_id}/followers.js');
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
     */
    delete: function (req, reply, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['delete']['200'];
        provider(req, reply, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            reply(data && data.responses).code(status);
        });
    },
    /**
     * summary: 
     * description: [Follow a Playlist](https://developer.spotify.com/web-api/follow-playlist/)

     * parameters: user_id, playlist_id, body
     * produces: text/plain
     * responses: 200
     */
    put: function (req, reply, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['put']['200'];
        provider(req, reply, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            reply(data && data.responses).code(status);
        });
    }
};
