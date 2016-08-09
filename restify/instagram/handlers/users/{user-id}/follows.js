'use strict';
var dataProvider = require('../../../data/users/{user-id}/follows.js');
/**
 * Operations on /users/{user-id}/follows
 */
module.exports = {
    /**
     * summary: Get the list of users this user follows.
     * description: Get the list of users this user follows. To get follows of the owner of the access token, you can use **self**
instead of the `user-id`.

     * parameters: user-id
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
