'use strict';
var dataProvider = require('../../../../data/repos/{owner}/{repo}/notifications.js');
/**
 * Operations on /repos/{owner}/{repo}/notifications
 */
module.exports = {
    /**
     * summary: 
     * description: List your notifications in a repository
List all notifications for the current user.

     * parameters: owner, repo, all, participating, since, X-GitHub-Media-Type, Accept, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-GitHub-Request-Id
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
    },
    /**
     * summary: 
     * description: Mark notifications as read in a repository.
Marking all notifications in a repository as &#34;read&#34; removes them from the
default view on GitHub.com.

     * parameters: owner, repo, X-GitHub-Media-Type, Accept, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-GitHub-Request-Id, body
     * produces: 
     * responses: 205, 403
     */
    put: function (req, res, next) {
        /**
         * Get the data for response 205
         * For response `default` status 200 is used.
         */
        var status = 205;
        var provider = dataProvider['put']['205'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
