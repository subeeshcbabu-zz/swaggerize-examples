'use strict';
var dataProvider = require('../../../../../../../data/legacy/issues/search/{owner}/{repository}/{state}/{keyword}.js');
/**
 * Operations on /legacy/issues/search/{owner}/{repository}/{state}/{keyword}
 */
module.exports = {
    /**
     * summary: 
     * description: Find issues by state and keyword.
     * parameters: keyword, state, owner, repository, X-GitHub-Media-Type, Accept, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-GitHub-Request-Id
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
