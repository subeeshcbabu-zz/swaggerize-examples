'use strict';
var Mockgen = require('../../../../mockgen.js');
/**
 * Operations on /users/{username}/events/orgs/{org}
 */
module.exports = {
    /**
     * summary: 
     * description: This is the user&#39;s organization dashboard. You must be authenticated as the user to view this.
     * parameters: username, org, X-GitHub-Media-Type, Accept, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-GitHub-Request-Id
     * produces: 
     * responses: 403
     * operationId: 
     */
    get: {
        403: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/users/{username}/events/orgs/{org}',
                operation: 'get',
                response: '403'
            }, callback);
        }
    }
};
