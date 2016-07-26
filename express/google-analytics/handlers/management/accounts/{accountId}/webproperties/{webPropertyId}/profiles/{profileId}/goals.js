'use strict';
var dataProvider = require('../../../../../../../../data/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals.js');
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
     */
    get: function analytics.management.goals.list(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['get']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
