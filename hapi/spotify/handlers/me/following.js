'use strict';
var dataProvider = require('../../data/me/following.js');
/**
 * Operations on /me/following
 */
module.exports = {
    /**
     * summary: 
     * description: [Unfollow Artists or Users](https://developer.spotify.com/web-api/unfollow-artists-users/)

     * parameters: type, ids
     * produces: 
     * responses: 204
     */
    delete: function (req, reply, next) {
        /**
         * Get the data for response 204
         * For response `default` status 200 is used.
         */
        var status = 204;
        var provider = dataProvider['delete']['204'];
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
     * description: [Get User&#39;s Followed Artists](https://developer.spotify.com/web-api/get-followed-artists/)

     * parameters: type, limit, after
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
    },
    /**
     * summary: 
     * description: [Follow Artists or Users](https://developer.spotify.com/web-api/follow-artists-users/)

     * parameters: type, ids
     * produces: 
     * responses: 204
     */
    put: function (req, reply, next) {
        /**
         * Get the data for response 204
         * For response `default` status 200 is used.
         */
        var status = 204;
        var provider = dataProvider['put']['204'];
        provider(req, reply, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            reply(data && data.responses).code(status);
        });
    }
};
