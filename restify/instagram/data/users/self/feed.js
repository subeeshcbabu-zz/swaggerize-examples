'use strict';
var Mockgen = require('../../mockgen.js');
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
     * operationId: 
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/users/self/feed',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
