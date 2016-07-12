'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /channels.invite
 */
module.exports = {
    /**
     * summary: 
     * description: Invites a user to a channel.
     * parameters: channel, user
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
                path: '/channels.invite',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
