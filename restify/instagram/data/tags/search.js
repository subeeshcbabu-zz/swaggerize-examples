'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /tags/search
 */
module.exports = {
    /**
     * summary: Search for tags by name.
     * description: Search for tags by name.
     * parameters: q
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
                path: '/tags/search',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
