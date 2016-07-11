'use strict';
var dataProvider = require('../../../../../data/users/{user_id}/playlists/{playlist_id}/tracks.js');
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
     * description: [Get a Playlist&#39;s Tracks](https://developer.spotify.com/web-api/get-playlists-tracks/)

     * parameters: user_id, playlist_id, limit, offset, fields, market, Accept
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
     * description: [Add Tracks to a Playlist](https://developer.spotify.com/web-api/add-tracks-to-playlist/)

     * parameters: user_id, playlist_id, position, uris, Accept
     * produces: 
     * responses: 200, 429
     */
    post: function (req, reply, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['post']['200'];
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
     * description: [Reorder or replace a Playlist&#39;s Tracks](https://developer.spotify.com/web-api/reorder-playlists-tracks/)

     * parameters: user_id, playlist_id, Accept, body
     * produces: 
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
