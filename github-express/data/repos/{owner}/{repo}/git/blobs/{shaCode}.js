'use strict';
var Mockgen = require('../../../../../mockgen.js');
/**
 * Operations on /repos/{owner}/{repo}/git/blobs/{shaCode}
 */
module.exports = {
    /**
     * summary: 
     * description: Get a Blob.
Since blobs can be any arbitrary binary data, the input and responses for
the blob API takes an encoding parameter that can be either utf-8 or
base64. If your data cannot be losslessly sent as a UTF-8 string, you can
base64 encode it.

     * parameters: owner, repo, shaCode, X-GitHub-Media-Type, Accept, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-GitHub-Request-Id
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
                path: '/repos/{owner}/{repo}/git/blobs/{shaCode}',
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
                path: '/repos/{owner}/{repo}/git/blobs/{shaCode}',
                operation: 'get',
                response: '403'
            }, callback);
        }
    }
};
