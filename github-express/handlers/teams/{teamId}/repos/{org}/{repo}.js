'use strict';
var dataProvider = require('../../../../../data/teams/{teamId}/repos/{org}/{repo}.js');
/**
 * Operations on /teams/{teamId}/repos/{org}/{repo}
 */
module.exports = {
    /**
     * summary: 
     * description: In order to add a repository to a team, the authenticated user must be an owner of the org that the team is associated with. Also, the repository must be owned by the organization, or a direct fork of a repository owned by the organization.
     * parameters: teamId, org, repo, X-GitHub-Media-Type, Accept, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-GitHub-Request-Id
     * produces: 
     * responses: 403
     */
    put: function (req, res, next) {
        /**
         * Get the data for response 403
         * For response `default` status 200 is used.
         */
        var status = 403;
        var provider = dataProvider['put']['403'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
