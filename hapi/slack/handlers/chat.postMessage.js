'use strict';
var dataProvider = require('../data/chat.postMessage.js');
/**
 * Operations on /chat.postMessage
 */
module.exports = {
    /**
     * summary: 
     * description: Sends a message to a channel.
     * parameters: channel, text, username, parse, link_names, unfurl_links, icon_url, icon_emoji, attachments
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
