'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /im.mark
 */
module.exports = {
    /**
     * summary: 
     * description: Sets the read cursor in a direct message channel.
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
                path: '/im.mark',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
