'use strict';
var dataProvider = require('../../../../data/users/{username}/following/{targetUser}.js');
/**
 * Operations on /users/{username}/following/{targetUser}
 */
module.exports = {
    /**
     * summary: 
     * description: Check if one user follows another.
     * parameters: username, targetUser, X-GitHub-Media-Type, Accept, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-GitHub-Request-Id
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
