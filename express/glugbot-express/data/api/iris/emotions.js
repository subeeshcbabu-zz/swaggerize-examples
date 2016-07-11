'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /api/iris/emotions
 */
module.exports = {
    /**
     * summary: Get emotional index for passed text
     * description: Gets a 20 point emotional index
     * parameters: textInput
     * produces: application/json
     * responses: 200
     * operationId: getIris
     */
    post: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/api/iris/emotions',
                operation: 'post',
                response: '200'
            }, callback);
        }
    }
};
