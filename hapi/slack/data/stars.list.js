'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /stars.list
 */
module.exports = {
    /**
     * summary: 
     * description: Lists stars for a user.
     * parameters: user, count, page
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
                path: '/stars.list',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
