'use strict';
var dataProvider = require('../../data/locations/search.js');
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
     */
    get: function (req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['get']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.send(status, data && data.responses);
            next();
        });
    }
};
