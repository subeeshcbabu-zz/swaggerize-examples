'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /users/{user-id}/relationship
 */
module.exports = {
    /**
     * summary: Get information about a relationship to another user.
     * description: Get information about a relationship to another user.
     * parameters: user-id
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
                path: '/users/{user-id}/relationship',
                operation: 'get',
                response: '200'
            }, callback);
        }
    },
    /**
     * summary: Modify the relationship between the current user and the target user.
     * description: Modify the relationship between the current user and the target user.
     * parameters: user-id, action
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
                path: '/users/{user-id}/relationship',
                operation: 'post',
                response: '200'
            }, callback);
        }
    }
};
