'use strict';
var dataProvider = require('../../data/me/tracks.js');
/**
 * Operations on /me/tracks
 */
module.exports = {
    /**
     * summary: 
     * description: [Remove Tracks for Current User](https://developer.spotify.com/web-api/remove-tracks-user/)

     * parameters: ids, Accept
     * produces: text/plain
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
     * description: [Get Current User&#39;s Saved Tracks](https://developer.spotify.com/web-api/get-users-saved-tracks/)

     * parameters: limit, offset, market, Accept
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
     * description: [Save Tracks for Current User](https://developer.spotify.com/web-api/save-tracks-user/)

     * parameters: ids, Accept
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
