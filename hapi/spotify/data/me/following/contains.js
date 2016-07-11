'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /me/following/contains
 */
module.exports = {
    /**
     * summary: 
     * description: [Check if Current User Follows Artists or Users](https://developer.spotify.com/web-api/check-current-user-follows/)

     * parameters: type, ids
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
                path: '/me/following/contains',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
