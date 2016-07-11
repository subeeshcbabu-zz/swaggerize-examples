'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /me/tracks/contains
 */
module.exports = {
    /**
     * summary: 
     * description: [Check Current User&#39;s Saved Tracks](https://developer.spotify.com/web-api/check-users-saved-tracks/)

     * parameters: ids
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
                path: '/me/tracks/contains',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
