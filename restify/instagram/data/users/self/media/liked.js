'use strict';
var Mockgen = require('../../../mockgen.js');
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
     * operationId: 
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/users/self/media/liked',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
