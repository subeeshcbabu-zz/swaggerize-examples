'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /im.list
 */
module.exports = {
    /**
     * summary: 
     * description: Lists direct message channels for the calling user.
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
                path: '/im.list',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
