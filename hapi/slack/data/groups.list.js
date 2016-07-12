'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /groups.list
 */
module.exports = {
    /**
     * summary: 
     * description: Lists private groups that the calling user has access to.
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
                path: '/groups.list',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
