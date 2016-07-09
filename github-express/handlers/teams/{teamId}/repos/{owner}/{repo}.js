'use strict';
var dataProvider = require('../../../../../data/teams/{teamId}/repos/{owner}/{repo}.js');
/**
 * Operations on /teams/{teamId}/repos/{owner}/{repo}
 */
module.exports = {
    /**
     * summary: 
     * description: In order to remove a repository from a team, the authenticated user must be an owner of the org that the team is associated with. NOTE: This does not delete the repository, it just removes it from the team.
     * parameters: teamId, owner, repo, X-GitHub-Media-Type, Accept, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-GitHub-Request-Id
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
     * description: Check if a team manages a repository
     * parameters: teamId, owner, repo, X-GitHub-Media-Type, Accept, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-GitHub-Request-Id
     * produces: 
     * responses: 403
     */
    get: function (req, res, next) {
        /**
         * Get the data for response 403
         * For response `default` status 200 is used.
         */
        var status = 403;
        var provider = dataProvider['get']['403'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
