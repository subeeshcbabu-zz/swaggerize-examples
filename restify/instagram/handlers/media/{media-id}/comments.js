'use strict';
var dataProvider = require('../../../data/media/{media-id}/comments.js');
/**
 * Operations on /media/{media-id}/comments
 */
module.exports = {
    /**
     * summary: Get a list of recent comments on a media object.
     * description: Get a list of recent comments on a media object.
     * parameters: media-id
     * produces: 
     * responses: 200
     */
    get: function (req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['get']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.send(status, data && data.responses);
            next();
        });
    },
    /**
     * summary: Create a comment on a media object.
     * description: Create a comment on a media object with the following rules:

  * The total length of the comment cannot exceed 300 characters.
  * The comment cannot contain more than 4 hashtags.
  * The comment cannot contain more than 1 URL.
  * The comment cannot consist of all capital letters.

     * parameters: media-id, text
     * produces: 
     * responses: 200
     */
    post: function (req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['post']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.send(status, data && data.responses);
            next();
        });
    }
};
