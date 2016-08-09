'use strict';
var Mockgen = require('../mockgen.js');
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
     * operationId: 
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/users/{user-id}',
                operation: 'get',
                response: '200'
            }, callback);
        },
        404: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/users/{user-id}',
                operation: 'get',
                response: '404'
            }, callback);
        }
    }
};
