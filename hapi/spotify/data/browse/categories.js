'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /browse/categories
 */
module.exports = {
    /**
     * summary: 
     * description: [Get a List of Browse Categories](https://developer.spotify.com/web-api/get-list-categories/)

     * parameters: limit, offset, country, locale, Accept
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
                path: '/browse/categories',
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
                path: '/browse/categories',
                operation: 'get',
                response: '429'
            }, callback);
        }
    }
};
