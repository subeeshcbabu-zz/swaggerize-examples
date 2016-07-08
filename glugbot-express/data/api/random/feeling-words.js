'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /api/random/feeling-words
 */
module.exports = {
    /**
     * summary: Get a random set of words which evoke a feeling
     * description: Each word returned is a &#39;feeling word&#39;
     * parameters: count
     * produces: application/json
     * responses: 200
     * operationId: getFeelingWords
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/api/random/feeling-words',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
