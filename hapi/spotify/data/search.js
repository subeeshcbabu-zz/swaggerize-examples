'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /search
 */
module.exports = {
    /**
     * summary: 
     * description: [Search for an Item](https://developer.spotify.com/web-api/search-item/)

     * parameters: limit, offset, q, type, market
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
                path: '/search',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
