'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /api/words/top-words
 */
module.exports = {
    /**
     * summary: Gets top words in the passed text
     * description: 
     * parameters: count, textInput
     * produces: application/json
     * responses: 200
     * operationId: getTopWords
     */
    post: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/api/words/top-words',
                operation: 'post',
                response: '200'
            }, callback);
        }
    }
};
