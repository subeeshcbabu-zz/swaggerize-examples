'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /users.list
 */
module.exports = {
    /**
     * summary: 
     * description: Lists all users in a Slack team.
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
                path: '/users.list',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
