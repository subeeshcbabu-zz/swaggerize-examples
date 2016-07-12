'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /emoji.list
 */
module.exports = {
    /**
     * summary: 
     * description: Lists custom emoji for a team.
     * parameters: 
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
                path: '/emoji.list',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
