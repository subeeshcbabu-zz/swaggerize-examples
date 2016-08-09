'use strict';
var dataProvider = require('../../data/locations/{location-id}.js');
/**
 * Operations on /locations/{location-id}
 */
module.exports = {
    /**
     * summary: Get information about a location.
     * description: Get information about a location.
     * parameters: location-id
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
