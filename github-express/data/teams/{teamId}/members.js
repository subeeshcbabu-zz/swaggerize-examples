'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /teams/{teamId}/members
 */
module.exports = {
    /**
     * summary: 
     * description: List team members.
In order to list members in a team, the authenticated user must be a member
of the team.

     * parameters: teamId, X-GitHub-Media-Type, Accept, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-GitHub-Request-Id
     * produces: 
     * responses: 200, 403
     * operationId: 
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/teams/{teamId}/members',
                operation: 'get',
                response: '200'
            }, callback);
        },
        403: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/teams/{teamId}/members',
                operation: 'get',
                response: '403'
            }, callback);
        }
    }
};
