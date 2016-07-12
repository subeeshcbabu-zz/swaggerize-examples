'use strict';
var dataProvider = require('../data/im.list.js');
/**
 * Operations on /im.list
 */
module.exports = {
    /**
     * summary: 
     * description: Lists direct message channels for the calling user.
     * parameters: 
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
