'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /groups.mark
 */
module.exports = {
    /**
     * summary: 
     * description: Sets the read cursor in a private group.
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
                path: '/groups.mark',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
