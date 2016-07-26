'use strict';
var Mockgen = require('../../../mockgen.js');
/**
 * Operations on /management/accounts/{accountId}/webproperties
 */
module.exports = {
    /**
     * summary: 
     * description: Lists web properties to which the user has access.
     * parameters: accountId, max-results, start-index
     * produces: 
     * responses: 200
     * operationId: analytics.management.webproperties.list
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/management/accounts/{accountId}/webproperties',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
