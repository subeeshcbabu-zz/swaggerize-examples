'use strict';
var Mockgen = require('../../../mockgen.js');
/**
 * Operations on /geographies/{geo-id}/media/recent
 */
module.exports = {
    /**
     * summary: Get recent media from a custom geo-id.
     * description: Get recent media from a geography subscription that you created.

**Note:** You can only access Geographies that were explicitly created by your OAuth client. Check the
Geography Subscriptions section of the [real-time updates page](https://instagram.com/developer/realtime/).
When you create a subscription to some geography that you define, you will be returned a unique `geo-id` that
can be used in this query. To backfill photos from the location covered by this geography, use the
[media search endpoint](https://instagram.com/developer/endpoints/media/).

**Warning:** [Deprecated](http://instagram.com/developer/changelog/) for Apps created **on or after** Nov 17, 2015

     * parameters: geo-id, count, min_id
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
                path: '/geographies/{geo-id}/media/recent',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
