'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /me/tracks
 */
module.exports = {
    /**
     * summary: 
     * description: [Remove Tracks for Current User](https://developer.spotify.com/web-api/remove-tracks-user/)

     * parameters: ids, Accept
     * produces: text/plain
     * responses: 200, 429
     * operationId: 
     */
    delete: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/me/tracks',
                operation: 'delete',
                response: '200'
            }, callback);
        },
        429: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/me/tracks',
                operation: 'delete',
                response: '429'
            }, callback);
        }
    },
    /**
     * summary: 
     * description: [Get Current User&#39;s Saved Tracks](https://developer.spotify.com/web-api/get-users-saved-tracks/)

     * parameters: limit, offset, market, Accept
     * produces: 
     * responses: 200, 429
     * operationId: 
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/me/tracks',
                operation: 'get',
                response: '200'
            }, callback);
        },
        429: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/me/tracks',
                operation: 'get',
                response: '429'
            }, callback);
        }
    },
    /**
     * summary: 
     * description: [Save Tracks for Current User](https://developer.spotify.com/web-api/save-tracks-user/)

     * parameters: ids, Accept
     * produces: text/plain
     * responses: 200, 429
     * operationId: 
     */
    put: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/me/tracks',
                operation: 'put',
                response: '200'
            }, callback);
        },
        429: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/me/tracks',
                operation: 'put',
                response: '429'
            }, callback);
        }
    }
};
