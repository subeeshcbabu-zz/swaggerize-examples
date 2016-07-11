'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /users/{username}/subscriptions
 */
module.exports = {
    /**
     * summary: 
     * description: List repositories being watched by a user.
     * parameters: username, X-GitHub-Media-Type, Accept, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-GitHub-Request-Id
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
                path: '/users/{username}/subscriptions',
                operation: 'get',
                response: '403'
            }, callback);
        }
    }
};
