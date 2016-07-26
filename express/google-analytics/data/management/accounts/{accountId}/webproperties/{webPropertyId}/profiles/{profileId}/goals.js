'use strict';
var Mockgen = require('../../../../../../../mockgen.js');
/**
 * Operations on /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals
 */
module.exports = {
    /**
     * summary: 
     * description: Lists goals to which the user has access.
     * parameters: accountId, webPropertyId, profileId, max-results, start-index
     * produces: 
     * responses: 200
     * operationId: analytics.management.goals.list
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
