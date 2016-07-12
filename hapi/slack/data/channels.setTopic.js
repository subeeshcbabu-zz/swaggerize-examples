'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /channels.setTopic
 */
module.exports = {
    /**
     * summary: 
     * description: Sets the topic for a channel.
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
                path: '/channels.setTopic',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
