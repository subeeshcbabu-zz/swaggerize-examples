'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /markdown
 */
module.exports = {
    /**
     * summary: 
     * description: Render an arbitrary Markdown document
     * parameters: X-GitHub-Media-Type, Accept, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-GitHub-Request-Id, body
     * produces: text/html
     * responses: 200, 403
     * operationId: 
     */
    post: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/markdown',
                operation: 'post',
                response: '200'
            }, callback);
        },
        403: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/markdown',
                operation: 'post',
                response: '403'
            }, callback);
        }
    }
};
