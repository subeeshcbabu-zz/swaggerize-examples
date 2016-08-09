'use strict';
var Mockgen = require('../../../mockgen.js');
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
     * operationId: 
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/tags/{tag-name}/media/recent',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
