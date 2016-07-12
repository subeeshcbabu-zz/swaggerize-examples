'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /search.all
 */
module.exports = {
    /**
     * summary: 
     * description: Searches for messages and files matching a query.
     * parameters: query, sort, sort_dir, highlight, count, page
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
                path: '/search.all',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
