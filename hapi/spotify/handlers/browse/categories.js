'use strict';
var dataProvider = require('../../data/browse/categories.js');
/**
 * Operations on /browse/categories
 */
module.exports = {
    /**
     * summary: 
     * description: [Get a List of Browse Categories](https://developer.spotify.com/web-api/get-list-categories/)

     * parameters: limit, offset, country, locale, Accept
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
