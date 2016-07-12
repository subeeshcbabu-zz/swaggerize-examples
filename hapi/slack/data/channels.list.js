'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /channels.list
 */
module.exports = {
    /**
     * summary: 
     * description: Lists all channels in a Slack team.
     * parameters: exclude_archived
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
                path: '/channels.list',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
