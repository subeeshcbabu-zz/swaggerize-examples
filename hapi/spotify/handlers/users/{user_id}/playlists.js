'use strict';
var dataProvider = require('../../../data/users/{user_id}/playlists.js');
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
     * description: [Create a Playlist](https://developer.spotify.com/web-api/create-playlist/)

     * parameters: user_id, Accept, body
     * produces: 
     * responses: 201, 429
     */
    post: function (req, reply, next) {
        /**
         * Get the data for response 201
         * For response `default` status 200 is used.
         */
        var status = 201;
        var provider = dataProvider['post']['201'];
        provider(req, reply, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            reply(data && data.responses).code(status);
        });
    }
};
