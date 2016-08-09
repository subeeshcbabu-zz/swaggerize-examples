'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /media/shortcode/{shortcode}
 */
module.exports = {
    /**
     * summary: Get information about a media object.
     * description: This endpoint returns the same response as `GET /media/{media-id}`.

A media object&#39;s shortcode can be found in its shortlink URL. An example shortlink is
`http://instagram.com/p/D/`, its corresponding shortcode is `D`.

     * parameters: shortcode
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
                path: '/media/shortcode/{shortcode}',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
