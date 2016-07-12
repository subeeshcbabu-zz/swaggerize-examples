'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /groups.setTopic
 */
module.exports = {
    /**
     * summary: 
     * description: Sets the topic for a private group.
     * parameters: channel, topic
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
                path: '/groups.setTopic',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
