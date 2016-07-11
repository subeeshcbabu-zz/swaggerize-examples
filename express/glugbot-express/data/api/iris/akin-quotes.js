'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /api/iris/akin-quotes
 */
module.exports = {
    /**
     * summary: Gets snippets from quotes which evoke similar emotions
     * description: Count cannot be more than 20
     * parameters: count, textInput
     * produces: application/json
     * responses: 200
     * operationId: getAkinQuotes
     */
    post: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/api/iris/akin-quotes',
                operation: 'post',
                response: '200'
            }, callback);
        }
    }
};
