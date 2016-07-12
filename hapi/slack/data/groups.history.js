'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /groups.history
 */
module.exports = {
    /**
     * summary: 
     * description: Fetches history of messages and events from a private group.
     * parameters: channel, latest, oldest, count, has_more, is_limited
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
                path: '/groups.history',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
