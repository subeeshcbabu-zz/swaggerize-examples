'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /channels.join
 */
module.exports = {
    /**
     * summary: 
     * description: Joins a channel, creating it if needed.
     * parameters: name
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
                path: '/channels.join',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
