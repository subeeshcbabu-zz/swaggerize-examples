'use strict';
var dataProvider = require('../../../../../data/repos/{owner}/{repo}/assignees/{assignee}.js');
/**
 * Operations on /repos/{owner}/{repo}/assignees/{assignee}
 */
module.exports = {
    /**
     * summary: 
     * description: Check assignee.
You may also check to see if a particular user is an assignee for a repository.

     * parameters: owner, repo, assignee, X-GitHub-Media-Type, Accept, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-GitHub-Request-Id
     * produces: 
     * responses: 204, 403, 404
     */
    get: function (req, res, next) {
        /**
         * Get the data for response 204
         * For response `default` status 200 is used.
         */
        var status = 204;
        var provider = dataProvider['get']['204'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
