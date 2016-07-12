'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /files.upload
 */
module.exports = {
    /**
     * summary: 
     * description: Uploads or creates a file.
     * parameters: file, content, filetype, filename, title, initial_comment, channels
     * produces: 
     * responses: 200
     * operationId: 
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/files.upload',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
