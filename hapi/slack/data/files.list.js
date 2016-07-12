'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /files.list
 */
module.exports = {
    /**
     * summary: 
     * description: Lists and filters team files.
     * parameters: file, user, ts_from, ts_to, types
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
                path: '/files.list',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
