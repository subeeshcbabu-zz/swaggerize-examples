'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /files.info
 */
module.exports = {
    /**
     * summary: 
     * description: Gets information about a team file.
     * parameters: file, count, page
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
                path: '/files.info',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
