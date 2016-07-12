'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /channels.leave
 */
module.exports = {
    /**
     * summary: 
     * description: Leaves a channel.
     * parameters: channel
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
                path: '/channels.leave',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
