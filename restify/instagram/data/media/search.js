'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /media/search
 */
module.exports = {
    /**
     * summary: Search for media in a given area.
     * description: Search for media in a given area. The default time span is set to 5 days. The time span must not exceed 7 days.
Defaults time stamps cover the last 5 days. Can return mix of `image` and `video` types.

     * parameters: lat, lng, min_timestamp, max_timestamp, distance
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
                path: '/media/search',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
