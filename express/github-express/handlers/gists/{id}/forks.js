'use strict';
var dataProvider = require('../../../data/gists/{id}/forks.js');
/**
 * Operations on /gists/{id}/forks
 */
module.exports = {
    /**
     * summary: 
     * description: Fork a gist.
     * parameters: id, X-GitHub-Media-Type, Accept, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-GitHub-Request-Id
     * produces: 
     * responses: 204, 403, 404
     */
    post: function (req, res, next) {
        /**
         * Get the data for response 204
         * For response `default` status 200 is used.
         */
        var status = 204;
        var provider = dataProvider['post']['204'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
