'use strict';
var dataProvider = require('../../../../../data/repos/{owner}/{repo}/{archive_format}/{path}.js');
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
     */
    get: function (req, res, next) {
        /**
         * Get the data for response 302
         * For response `default` status 200 is used.
         */
        var status = 302;
        var provider = dataProvider['get']['302'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
