'use strict';
var dataProvider = require('../../data/users/{user-id}.js');
/**
 * Operations on /users/{user-id}
 */
module.exports = {
    /**
     * summary: Get basic information about a user.
     * description: Get basic information about a user. To get information about the owner of the access token, you can use
**self** instead of the `user-id`.

Security scope `public_content` is required to read information about other users.

     * parameters: user-id
     * produces: 
     * responses: 200, 404
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
