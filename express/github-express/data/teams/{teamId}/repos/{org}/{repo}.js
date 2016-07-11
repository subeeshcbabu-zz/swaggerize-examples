'use strict';
var Mockgen = require('../../../../mockgen.js');
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
     * operationId: 
     */
    put: {
        403: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/teams/{teamId}/repos/{org}/{repo}',
                operation: 'put',
                response: '403'
            }, callback);
        }
    }
};
