'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /media/{media-id}/likes
 */
module.exports = {
    /**
     * summary: Remove a like on this media by the current user.
     * description: Remove a like on this media by the currently authenticated user.
     * parameters: media-id
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
                path: '/media/{media-id}/likes',
                operation: 'delete',
                response: '200'
            }, callback);
        }
    },
    /**
     * summary: Get a list of users who have liked this media.
     * description: Get a list of users who have liked this media.
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
                path: '/media/{media-id}/likes',
                operation: 'get',
                response: '200'
            }, callback);
        }
    },
    /**
     * summary: Set a like on this media by the current user.
     * description: Set a like on this media by the currently authenticated user.
     * parameters: media-id
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
                path: '/media/{media-id}/likes',
                operation: 'post',
                response: '200'
            }, callback);
        }
    }
};
