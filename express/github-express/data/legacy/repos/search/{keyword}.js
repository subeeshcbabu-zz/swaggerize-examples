'use strict';
var Mockgen = require('../../../mockgen.js');
/**
 * Operations on /legacy/repos/search/{keyword}
 */
module.exports = {
    /**
     * summary: 
     * description: Find repositories by keyword. Note, this legacy method does not follow the v3 pagination pattern. This method returns up to 100 results per page and pages can be fetched using the start_page parameter.
     * parameters: keyword, order, language, start_page, sort, X-GitHub-Media-Type, Accept, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-GitHub-Request-Id
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
                path: '/legacy/repos/search/{keyword}',
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
                path: '/legacy/repos/search/{keyword}',
                operation: 'get',
                response: '403'
            }, callback);
        }
    }
};
