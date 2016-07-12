'use strict';
var dataProvider = require('../data/channels.join.js');
/**
 * Operations on /channels.join
 */
module.exports = {
    /**
     * summary: 
     * description: Joins a channel, creating it if needed.
     * parameters: name
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
