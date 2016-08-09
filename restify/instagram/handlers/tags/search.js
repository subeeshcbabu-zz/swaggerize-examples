'use strict';
var dataProvider = require('../../data/tags/search.js');
/**
 * Operations on /tags/search
 */
module.exports = {
    /**
     * summary: Search for tags by name.
     * description: Search for tags by name.
     * parameters: q
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
