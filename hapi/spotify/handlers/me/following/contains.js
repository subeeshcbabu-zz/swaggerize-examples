'use strict';
var dataProvider = require('../../../data/me/following/contains.js');
/**
 * Operations on /me/following/contains
 */
module.exports = {
    /**
     * summary: 
     * description: [Check if Current User Follows Artists or Users](https://developer.spotify.com/web-api/check-current-user-follows/)

     * parameters: type, ids
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
