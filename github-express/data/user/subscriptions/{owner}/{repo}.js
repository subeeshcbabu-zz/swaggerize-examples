'use strict';
var Mockgen = require('../../../mockgen.js');
/**
 * Operations on /user/subscriptions/{owner}/{repo}
 */
module.exports = {
    /**
     * summary: 
     * description: Stop watching a repository
     * parameters: owner, repo, X-GitHub-Media-Type, Accept, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-GitHub-Request-Id
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
                path: '/user/subscriptions/{owner}/{repo}',
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
                path: '/user/subscriptions/{owner}/{repo}',
                operation: 'delete',
                response: '403'
            }, callback);
        }
    },
    /**
     * summary: 
     * description: Check if you are watching a repository.
     * parameters: owner, repo, X-GitHub-Media-Type, Accept, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-GitHub-Request-Id
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
                path: '/user/subscriptions/{owner}/{repo}',
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
                path: '/user/subscriptions/{owner}/{repo}',
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
                path: '/user/subscriptions/{owner}/{repo}',
                operation: 'get',
                response: '404'
            }, callback);
        }
    },
    /**
     * summary: 
     * description: Watch a repository.
     * parameters: owner, repo, X-GitHub-Media-Type, Accept, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-GitHub-Request-Id
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
                path: '/user/subscriptions/{owner}/{repo}',
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
                path: '/user/subscriptions/{owner}/{repo}',
                operation: 'put',
                response: '403'
            }, callback);
        }
    }
};
