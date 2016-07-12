'use strict';
var dataProvider = require('../data/channels.history.js');
/**
 * Operations on /channels.history
 */
module.exports = {
    /**
     * summary: 
     * description: Fetches history of messages and events from a channel.
     * parameters: channel, latest, oldest, count, has_more, is_limited
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
