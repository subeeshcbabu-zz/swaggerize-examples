'use strict';
var dataProvider = require('../../../../../data/repos/{owner}/{repo}/issues/events.js');
/**
 * Operations on /repos/{owner}/{repo}/issues/events
 */
module.exports = {
    /**
     * summary: 
     * description: List issue events for a repository.
     * parameters: owner, repo, X-GitHub-Media-Type, Accept, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-GitHub-Request-Id
     * produces: 
     * responses: 200, 403
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
    }
};
