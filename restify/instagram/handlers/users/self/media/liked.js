'use strict';
var dataProvider = require('../../../../data/users/self/media/liked.js');
/**
 * Operations on /users/self/media/liked
 */
module.exports = {
    /**
     * summary: See the list of media liked by the authenticated user.
     * description: See the list of media liked by the authenticated user. Private media is returned as long as the authenticated
user has permission to view that media. Liked media lists are only available for the currently authenticated
user.

     * parameters: count, max_like_id
     * produces: 
     * responses: 200
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
            res.send(status, data && data.responses);
            next();
        });
    }
};
