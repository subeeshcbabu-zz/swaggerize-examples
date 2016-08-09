'use strict';
var dataProvider = require('../../../../data/media/{media-id}/comments/{comment-id}.js');
/**
 * Operations on /media/{media-id}/comments/{comment-id}
 */
module.exports = {
    /**
     * summary: Remove a comment.
     * description: Remove a comment either on the authenticated user&#39;s media object or authored by the authenticated user.

     * parameters: media-id, comment-id
     * produces: 
     * responses: 200
     */
    delete: function (req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['delete']['200'];
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
