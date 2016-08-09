'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /users/search
 */
module.exports = {
    /**
     * summary: Search for a user by name.
     * description: Search for a user by name.
     * parameters: q, count
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
                path: '/users/search',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
