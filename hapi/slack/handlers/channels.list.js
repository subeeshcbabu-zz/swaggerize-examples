'use strict';
var dataProvider = require('../data/channels.list.js');
/**
 * Operations on /channels.list
 */
module.exports = {
    /**
     * summary: 
     * description: Lists all channels in a Slack team.
     * parameters: exclude_archived
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
