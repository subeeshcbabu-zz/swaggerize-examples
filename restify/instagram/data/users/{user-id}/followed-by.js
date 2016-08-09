'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /users/{user-id}/followed-by
 */
module.exports = {
    /**
     * summary: Get the list of users this user is followed by.
     * description: Get the list of users this user is followed by. To get users followed by the owner of the access token, you
can use **self** instead of the `user-id`.

     * parameters: user-id
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
                path: '/users/{user-id}/followed-by',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
