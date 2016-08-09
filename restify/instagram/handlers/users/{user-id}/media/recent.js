'use strict';
var dataProvider = require('../../../../data/users/{user-id}/media/recent.js');
/**
 * Operations on /users/{user-id}/media/recent
 */
module.exports = {
    /**
     * summary: Get the most recent media published by a user.
     * description: Get the most recent media published by a user. To get the most recent media published by the owner of the
access token, you can use **self** instead of the `user-id`.

Security scope `public_content` is required to read information about other users.

     * parameters: user-id, count, max_timestamp, min_timestamp, min_id, max_id
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
