'use strict';
var Mockgen = require('../../../mockgen.js');
/**
 * Operations on /teams/{teamId}/memberships/{username}
 */
module.exports = {
    /**
     * summary: 
     * description: Remove team membership.
In order to remove a membership between a user and a team, the authenticated user must have &#39;admin&#39; permissions to the team or be an owner of the organization that the team is associated with. NOTE: This does not delete the user, it just removes their membership from the team.

     * parameters: teamId, username, X-GitHub-Media-Type, Accept, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-GitHub-Request-Id
     * produces: 
     * responses: 204, 403
     * operationId: 
     */
    delete: {
        204: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/teams/{teamId}/memberships/{username}',
                operation: 'delete',
                response: '204'
            }, callback);
        },
        403: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/teams/{teamId}/memberships/{username}',
                operation: 'delete',
                response: '403'
            }, callback);
        }
    },
    /**
     * summary: 
     * description: Get team membership.
In order to get a user&#39;s membership with a team, the authenticated user must be a member of the team or an owner of the team&#39;s organization.

     * parameters: teamId, username, X-GitHub-Media-Type, Accept, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-GitHub-Request-Id
     * produces: 
     * responses: 200, 403, 404
     * operationId: 
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/teams/{teamId}/memberships/{username}',
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
                path: '/teams/{teamId}/memberships/{username}',
                operation: 'get',
                response: '403'
            }, callback);
        },
        404: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/teams/{teamId}/memberships/{username}',
                operation: 'get',
                response: '404'
            }, callback);
        }
    },
    /**
     * summary: 
     * description: Add team membership.
In order to add a membership between a user and a team, the authenticated user must have &#39;admin&#39; permissions to the team or be an owner of the organization that the team is associated with.

If the user is already a part of the team&#39;s organization (meaning they&#39;re on at least one other team in the organization), this endpoint will add the user to the team.

If the user is completely unaffiliated with the team&#39;s organization (meaning they&#39;re on none of the organization&#39;s teams), this endpoint will send an invitation to the user via email. This newly-created membership will be in the &#39;pending&#39; state until the user accepts the invitation, at which point the membership will transition to the &#39;active&#39; state and the user will be added as a member of the team.

     * parameters: teamId, username, X-GitHub-Media-Type, Accept, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-GitHub-Request-Id
     * produces: 
     * responses: 200, 403, 422
     * operationId: 
     */
    put: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/teams/{teamId}/memberships/{username}',
                operation: 'put',
                response: '200'
            }, callback);
        },
        403: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/teams/{teamId}/memberships/{username}',
                operation: 'put',
                response: '403'
            }, callback);
        },
        422: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/teams/{teamId}/memberships/{username}',
                operation: 'put',
                response: '422'
            }, callback);
        }
    }
};
