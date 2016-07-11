'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /me
 */
module.exports = {
    /**
     * summary: 
     * description: [Get Current User&#39;s Profile](https://developer.spotify.com/web-api/get-current-users-profile/)

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
                path: '/me',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
