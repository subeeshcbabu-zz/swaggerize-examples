'use strict';
var dataProvider = require('../../../data/media/{media-id}/likes.js');
/**
 * Operations on /media/{media-id}/likes
 */
module.exports = {
    /**
     * summary: Remove a like on this media by the current user.
     * description: Remove a like on this media by the currently authenticated user.
     * parameters: media-id
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
    },
    /**
     * summary: Get a list of users who have liked this media.
     * description: Get a list of users who have liked this media.
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
     * summary: Set a like on this media by the current user.
     * description: Set a like on this media by the currently authenticated user.
     * parameters: media-id
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
