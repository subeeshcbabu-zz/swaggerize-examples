'use strict';
var dataProvider = require('../../../../data/teams/{teamId}/memberships/{username}.js');
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
     */
    delete: function (req, res, next) {
        /**
         * Get the data for response 204
         * For response `default` status 200 is used.
         */
        var status = 204;
        var provider = dataProvider['delete']['204'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    },
    /**
     * summary: 
     * description: Get team membership.
In order to get a user&#39;s membership with a team, the authenticated user must be a member of the team or an owner of the team&#39;s organization.

     * parameters: teamId, username, X-GitHub-Media-Type, Accept, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-GitHub-Request-Id
     * produces: 
     * responses: 200, 403, 404
     */
    get: function (req, res, next) {
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
     */
    put: function (req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['put']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
