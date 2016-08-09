'use strict';
var dataProvider = require('../../../data/users/self/feed.js');
/**
 * Operations on /users/self/feed
 */
module.exports = {
    /**
     * summary: See the authenticated user&#39;s feed.
     * description: See the authenticated user&#39;s feed.

**Warning:** [Deprecated](http://instagram.com/developer/changelog/) for Apps created **on or after** Nov 17, 2015

     * parameters: count, min_id, max_id
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
