'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /artists/{id}/related-artists
 */
module.exports = {
    /**
     * summary: 
     * description: [Get an Artist&#39;s Related Artists](https://developer.spotify.com/web-api/get-related-artists/)

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
                path: '/artists/{id}/related-artists',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
