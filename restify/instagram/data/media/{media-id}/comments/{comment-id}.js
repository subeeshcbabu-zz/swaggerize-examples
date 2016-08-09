'use strict';
var Mockgen = require('../../../mockgen.js');
/**
 * Operations on /media/{media-id}/comments/{comment-id}
 */
module.exports = {
    /**
     * summary: Remove a comment.
     * description: Remove a comment either on the authenticated user&#39;s media object or authored by the authenticated user.

     * parameters: media-id, comment-id
     * produces: 
     * responses: 200
     * operationId: 
     */
    delete: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/media/{media-id}/comments/{comment-id}',
                operation: 'delete',
                response: '200'
            }, callback);
        }
    }
};
