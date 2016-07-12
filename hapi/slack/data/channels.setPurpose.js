'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /channels.setPurpose
 */
module.exports = {
    /**
     * summary: 
     * description: Sets the purpose for a channel.
     * parameters: channel, purpose
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
                path: '/channels.setPurpose',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
