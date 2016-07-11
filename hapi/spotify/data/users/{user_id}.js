'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /users/{user_id}
 */
module.exports = {
    /**
     * summary: 
     * description: [Get a User&#39;s Profile](https://developer.spotify.com/web-api/get-users-profile/)

     * parameters: user_id
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
                path: '/users/{user_id}',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
