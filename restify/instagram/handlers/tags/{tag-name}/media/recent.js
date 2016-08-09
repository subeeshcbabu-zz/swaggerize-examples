'use strict';
var dataProvider = require('../../../../data/tags/{tag-name}/media/recent.js');
/**
 * Operations on /tags/{tag-name}/media/recent
 */
module.exports = {
    /**
     * summary: Get a list of recently tagged media.
     * description: Get a list of recently tagged media. Use the `max_tag_id` and `min_tag_id` parameters in the pagination
response to paginate through these objects.

     * parameters: tag-name, count, min_tag_id, max_tag_id
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
