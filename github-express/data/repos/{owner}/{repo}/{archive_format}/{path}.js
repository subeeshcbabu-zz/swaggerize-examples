'use strict';
var Mockgen = require('../../../../mockgen.js');
/**
 * Operations on /repos/{owner}/{repo}/{archive_format}/{path}
 */
module.exports = {
    /**
     * summary: 
     * description: Get archive link.
This method will return a 302 to a URL to download a tarball or zipball
archive for a repository. Please make sure your HTTP framework is
configured to follow redirects or you will need to use the Location header
to make a second GET request.
Note: For private repositories, these links are temporary and expire quickly.

     * parameters: owner, repo, archive_format, path, X-GitHub-Media-Type, Accept, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-GitHub-Request-Id
     * produces: 
     * responses: 302, 403
     * operationId: 
     */
    get: {
        302: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/repos/{owner}/{repo}/{archive_format}/{path}',
                operation: 'get',
                response: '302'
            }, callback);
        },
        403: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/repos/{owner}/{repo}/{archive_format}/{path}',
                operation: 'get',
                response: '403'
            }, callback);
        }
    }
};
