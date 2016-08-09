'use strict';
var dataProvider = require('../../../data/users/self/requested-by.js');
/**
 * Operations on /users/self/requested-by
 */
module.exports = {
    /**
     * summary: List the users who have requested this user&#39;s permission to follow.
     * description: List the users who have requested this user&#39;s permission to follow.
     * parameters: 
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
