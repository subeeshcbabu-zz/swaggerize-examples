'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /chat.delete
 */
module.exports = {
    /**
     * summary: 
     * description: Deletes a message.
     * parameters: channel, ts
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
                path: '/chat.delete',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
