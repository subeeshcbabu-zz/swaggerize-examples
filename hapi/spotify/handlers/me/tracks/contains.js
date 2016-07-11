'use strict';
var dataProvider = require('../../../data/me/tracks/contains.js');
/**
 * Operations on /me/tracks/contains
 */
module.exports = {
    /**
     * summary: 
     * description: [Check Current User&#39;s Saved Tracks](https://developer.spotify.com/web-api/check-users-saved-tracks/)

     * parameters: ids
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
