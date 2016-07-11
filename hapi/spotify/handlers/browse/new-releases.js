'use strict';
var dataProvider = require('../../data/browse/new-releases.js');
/**
 * Operations on /browse/new-releases
 */
module.exports = {
    /**
     * summary: 
     * description: [Get a List of New Releases](https://developer.spotify.com/web-api/get-list-new-releases/)

     * parameters: limit, offset, country, Accept
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
    }
};
