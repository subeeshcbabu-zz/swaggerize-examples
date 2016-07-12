'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /chat.update
 */
module.exports = {
    /**
     * summary: 
     * description: Updates a message.
     * parameters: channel, text, ts
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
                path: '/chat.update',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
