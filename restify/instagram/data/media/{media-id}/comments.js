'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /media/{media-id}/comments
 */
module.exports = {
    /**
     * summary: Get a list of recent comments on a media object.
     * description: Get a list of recent comments on a media object.
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
                path: '/media/{media-id}/comments',
                operation: 'get',
                response: '200'
            }, callback);
        }
    },
    /**
     * summary: Create a comment on a media object.
     * description: Create a comment on a media object with the following rules:

  * The total length of the comment cannot exceed 300 characters.
  * The comment cannot contain more than 4 hashtags.
  * The comment cannot contain more than 1 URL.
  * The comment cannot consist of all capital letters.

     * parameters: media-id, text
     * produces: 
     * responses: 200
     * operationId: 
     */
    post: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/media/{media-id}/comments',
                operation: 'post',
                response: '200'
            }, callback);
        }
    }
};
