'use strict';
var dataProvider = require('../../../../data/locations/{location-id}/media/recent.js');
/**
 * Operations on /locations/{location-id}/media/recent
 */
module.exports = {
    /**
     * summary: Get a list of recent media objects from a given location.
     * description: Get a list of recent media objects from a given location.
     * parameters: location-id, min_timestamp, max_timestamp, min_id, max_id
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
