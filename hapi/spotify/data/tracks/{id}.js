'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /tracks/{id}
 */
module.exports = {
    /**
     * summary: 
     * description: [Get a Track](https://developer.spotify.com/web-api/get-track/)

     * parameters: id, market
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
                path: '/tracks/{id}',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
