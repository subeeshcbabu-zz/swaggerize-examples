'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /browse/new-releases
 */
module.exports = {
    /**
     * summary: 
     * description: [Get a List of New Releases](https://developer.spotify.com/web-api/get-list-new-releases/)

     * parameters: limit, offset, country, Accept
     * produces: 
     * responses: 200, 429
     * operationId: 
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/browse/new-releases',
                operation: 'get',
                response: '200'
            }, callback);
        },
        429: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/browse/new-releases',
                operation: 'get',
                response: '429'
            }, callback);
        }
    }
};
