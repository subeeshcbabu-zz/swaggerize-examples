'use strict';
var dataProvider = require('../data/files.upload.js');
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
     */
    get: function (req, reply, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['get']['200'];
        provider(req, reply, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            reply(data && data.responses).code(status);
        });
    }
};
