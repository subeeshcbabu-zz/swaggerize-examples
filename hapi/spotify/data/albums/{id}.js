'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /albums/{id}
 */
module.exports = {
    /**
     * summary: 
     * description: [Get an Album](https://developer.spotify.com/web-api/get-album/)

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
                path: '/albums/{id}',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
