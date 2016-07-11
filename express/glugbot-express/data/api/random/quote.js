'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /api/random/quote
 */
module.exports = {
    /**
     * summary: Get a random quote
     * description: 
     * parameters: 
     * produces: application/json
     * responses: 200
     * operationId: getRandomQuote
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/api/random/quote',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
