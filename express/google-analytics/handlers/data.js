'use strict';
var dataProvider = require('../data/data.js');
/**
 * Operations on /data
 */
module.exports = {
    /**
     * summary: 
     * description: Returns Analytics report data for a view (profile).
     * parameters: ids, start-date, end-date, metrics, dimensions, filters, max-results, segment, sort, start-index
     * produces: 
     * responses: 200
     */
    get: function analytics.data.get(req, res, next) {
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
            res.status(status).send(data && data.responses);
        });
    }
};
