'use strict';
var Mockgen = require('../../mockgen.js');
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
     * operationId: 
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/users/self/requested-by',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
