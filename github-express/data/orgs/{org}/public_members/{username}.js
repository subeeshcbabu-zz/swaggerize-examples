'use strict';
var Mockgen = require('../../../mockgen.js');
/**
 * Operations on /orgs/{org}/public_members/{username}
 */
module.exports = {
    /**
     * summary: 
     * description: Conceal a user&#39;s membership.
     * parameters: org, username, X-GitHub-Media-Type, Accept, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-GitHub-Request-Id
     * produces: 
     * responses: 204, 403
     * operationId: 
     */
    delete: {
        204: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/orgs/{org}/public_members/{username}',
                operation: 'delete',
                response: '204'
            }, callback);
        },
        403: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/orgs/{org}/public_members/{username}',
                operation: 'delete',
                response: '403'
            }, callback);
        }
    },
    /**
     * summary: 
     * description: Check public membership.
     * parameters: org, username, X-GitHub-Media-Type, Accept, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-GitHub-Request-Id
     * produces: 
     * responses: 204, 403, 404
     * operationId: 
     */
    get: {
        204: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/orgs/{org}/public_members/{username}',
                operation: 'get',
                response: '204'
            }, callback);
        },
        403: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/orgs/{org}/public_members/{username}',
                operation: 'get',
                response: '403'
            }, callback);
        },
        404: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/orgs/{org}/public_members/{username}',
                operation: 'get',
                response: '404'
            }, callback);
        }
    },
    /**
     * summary: 
     * description: Publicize a user&#39;s membership.
     * parameters: org, username, X-GitHub-Media-Type, Accept, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-GitHub-Request-Id
     * produces: 
     * responses: 204, 403
     * operationId: 
     */
    put: {
        204: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/orgs/{org}/public_members/{username}',
                operation: 'put',
                response: '204'
            }, callback);
        },
        403: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/orgs/{org}/public_members/{username}',
                operation: 'put',
                response: '403'
            }, callback);
        }
    }
};
