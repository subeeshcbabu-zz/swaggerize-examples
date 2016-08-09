'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /media/{media-id}
 */
module.exports = {
    /**
     * summary: Get information about a media object.
     * description: Get information about a media object. The returned type key will allow you to differentiate between image and
video media.

**Note:** if you authenticate with an OAuth Token, you will receive the user_has_liked key which quickly tells
you whether the current user has liked this media item.

     * parameters: media-id
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
                path: '/media/{media-id}',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
