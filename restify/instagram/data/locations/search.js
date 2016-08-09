'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /locations/search
 */
module.exports = {
    /**
     * summary: Search for a location by geographic coordinate.
     * description: Search for a location by geographic coordinate.
     * parameters: distance, facebook_places_id, foursquare_id, lat, lng, foursquare_v2_id
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
                path: '/locations/search',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
