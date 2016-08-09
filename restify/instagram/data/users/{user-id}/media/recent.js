'use strict';
var Mockgen = require('../../../mockgen.js');
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
     * operationId: 
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/users/{user-id}/media/recent',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
