'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /me/following
 */
module.exports = {
    /**
     * summary: 
     * description: [Unfollow Artists or Users](https://developer.spotify.com/web-api/unfollow-artists-users/)

     * parameters: type, ids
     * produces: 
     * responses: 204
     * operationId: 
     */
    delete: {
        204: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/me/following',
                operation: 'delete',
                response: '204'
            }, callback);
        }
    },
    /**
     * summary: 
     * description: [Get User&#39;s Followed Artists](https://developer.spotify.com/web-api/get-followed-artists/)

     * parameters: type, limit, after
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
                path: '/me/following',
                operation: 'get',
                response: '200'
            }, callback);
        }
    },
    /**
     * summary: 
     * description: [Follow Artists or Users](https://developer.spotify.com/web-api/follow-artists-users/)

     * parameters: type, ids
     * produces: 
     * responses: 204
     * operationId: 
     */
    put: {
        204: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/me/following',
                operation: 'put',
                response: '204'
            }, callback);
        }
    }
};
