'use strict';
var Mockgen = require('../../../mockgen.js');
/**
 * Operations on /repos/{owner}/{repo}/notifications
 */
module.exports = {
    /**
     * summary: 
     * description: List your notifications in a repository
List all notifications for the current user.

     * parameters: owner, repo, all, participating, since, X-GitHub-Media-Type, Accept, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-GitHub-Request-Id
     * produces: 
     * responses: 200, 403
     * operationId: 
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/repos/{owner}/{repo}/notifications',
                operation: 'get',
                response: '200'
            }, callback);
        },
        403: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/repos/{owner}/{repo}/notifications',
                operation: 'get',
                response: '403'
            }, callback);
        }
    },
    /**
     * summary: 
     * description: Mark notifications as read in a repository.
Marking all notifications in a repository as &#34;read&#34; removes them from the
default view on GitHub.com.

     * parameters: owner, repo, X-GitHub-Media-Type, Accept, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-GitHub-Request-Id, body
     * produces: 
     * responses: 205, 403
     * operationId: 
     */
    put: {
        205: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/repos/{owner}/{repo}/notifications',
                operation: 'put',
                response: '205'
            }, callback);
        },
        403: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/repos/{owner}/{repo}/notifications',
                operation: 'put',
                response: '403'
            }, callback);
        }
    }
};
