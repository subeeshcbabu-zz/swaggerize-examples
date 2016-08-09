'use strict';
var dataProvider = require('../../../data/users/{user-id}/relationship.js');
/**
 * Operations on /users/{user-id}/relationship
 */
module.exports = {
    /**
     * summary: Get information about a relationship to another user.
     * description: Get information about a relationship to another user.
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
    },
    /**
     * summary: Modify the relationship between the current user and the target user.
     * description: Modify the relationship between the current user and the target user.
     * parameters: user-id, action
     * produces: 
     * responses: 200
     */
    post: function (req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['post']['200'];
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
