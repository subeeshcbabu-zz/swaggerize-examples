'use strict';
var Mockgen = require('../../../../mockgen.js');
/**
 * Operations on /repos/{owner}/{repo}/git/tags
 */
module.exports = {
    /**
     * summary: 
     * description: Create a Tag Object.
Note that creating a tag object does not create the reference that makes a
tag in Git. If you want to create an annotated tag in Git, you have to do
this call to create the tag object, and then create the refs/tags/[tag]
reference. If you want to create a lightweight tag, you only have to create
the tag reference - this call would be unnecessary.

     * parameters: owner, repo, X-GitHub-Media-Type, Accept, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-GitHub-Request-Id, body
     * produces: 
     * responses: 201, 403
     * operationId: 
     */
    post: {
        201: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/repos/{owner}/{repo}/git/tags',
                operation: 'post',
                response: '201'
            }, callback);
        },
        403: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/repos/{owner}/{repo}/git/tags',
                operation: 'post',
                response: '403'
            }, callback);
        }
    }
};
