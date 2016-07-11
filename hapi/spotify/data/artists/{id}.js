'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /artists/{id}
 */
module.exports = {
    /**
     * summary: 
     * description: [Get an Artist](https://developer.spotify.com/web-api/get-artist/)

     * parameters: id
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
                path: '/artists/{id}',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
