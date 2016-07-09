'use strict';
var dataProvider = require('../../../../../../../data/repos/{owner}/{repo}/issues/{number}/labels/{name}.js');
/**
 * Operations on /repos/{owner}/{repo}/issues/{number}/labels/{name}
 */
module.exports = {
    /**
     * summary: 
     * description: Remove a label from an issue.
     * parameters: owner, repo, number, name, X-GitHub-Media-Type, Accept, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-GitHub-Request-Id
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
    }
};
