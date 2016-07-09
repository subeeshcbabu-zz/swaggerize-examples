'use strict';
var Mockgen = require('../../../../../mockgen.js');
/**
 * Operations on /repos/{owner}/{repo}/git/refs/{ref}
 */
module.exports = {
    /**
     * summary: 
     * description: Delete a Reference
Example: Deleting a branch: DELETE /repos/octocat/Hello-World/git/refs/heads/feature-a 
Example: Deleting a tag:        DELETE /repos/octocat/Hello-World/git/refs/tags/v1.0

     * parameters: owner, repo, ref, X-GitHub-Media-Type, Accept, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-GitHub-Request-Id
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
                path: '/repos/{owner}/{repo}/git/refs/{ref}',
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
                path: '/repos/{owner}/{repo}/git/refs/{ref}',
                operation: 'delete',
                response: '403'
            }, callback);
        }
    },
    /**
     * summary: 
     * description: Get a Reference
     * parameters: owner, repo, ref, X-GitHub-Media-Type, Accept, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-GitHub-Request-Id
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
                path: '/repos/{owner}/{repo}/git/refs/{ref}',
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
                path: '/repos/{owner}/{repo}/git/refs/{ref}',
                operation: 'get',
                response: '403'
            }, callback);
        }
    },
    /**
     * summary: 
     * description: Update a Reference
     * parameters: owner, repo, ref, X-GitHub-Media-Type, Accept, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-GitHub-Request-Id, body
     * produces: 
     * responses: 200, 403
     * operationId: 
     */
    patch: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/repos/{owner}/{repo}/git/refs/{ref}',
                operation: 'patch',
                response: '200'
            }, callback);
        },
        403: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/repos/{owner}/{repo}/git/refs/{ref}',
                operation: 'patch',
                response: '403'
            }, callback);
        }
    }
};
