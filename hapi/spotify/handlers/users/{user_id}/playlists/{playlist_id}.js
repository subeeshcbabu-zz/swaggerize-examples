'use strict';
var dataProvider = require('../../../../data/users/{user_id}/playlists/{playlist_id}.js');
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
    },
    /**
     * summary: 
     * description: [Change a Playlist&#39;s Details](https://developer.spotify.com/web-api/change-playlist-details/)

     * parameters: user_id, playlist_id, Accept, body
     * produces: text/plain
     * responses: 200, 429
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
