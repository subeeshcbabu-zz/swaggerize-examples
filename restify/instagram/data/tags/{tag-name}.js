'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /tags/{tag-name}
 */
module.exports = {
    /**
     * summary: Get information about a tag object.
     * description: Get information about a tag object.
     * parameters: tag-name
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
                path: '/tags/{tag-name}',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
