'use strict';
var Mockgen = require('./mockgen.js');
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
     * operationId: 
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/chat.postMessage',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
