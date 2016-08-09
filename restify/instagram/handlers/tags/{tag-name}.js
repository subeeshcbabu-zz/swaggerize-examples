'use strict';
var dataProvider = require('../../data/tags/{tag-name}.js');
/**
 * Operations on /tags/{tag-name}
 */
module.exports = {
    /**
     * summary: Get information about a tag object.
     * description: Get information about a tag object.
     * parameters: tag-name
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
